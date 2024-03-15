import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import axios from "axios";
import { Loading } from "../componets/Loading";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const  PostTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const  PostText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const  PostDate = styled.Text`
  font-size: 14px;
  color: gray;
`;
const  PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const FullPostScreen = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setData] = React.useState();

    React.useEffect(() => {
            axios.get('https://65f3cc3a105614e654a127d4.mockapi.io/article.1').then(({ data }) => {
            setData(data);
        }).catch(err => {
            console.log(err);
            Alert.alert('Ошибка!', 'Не удалось получить статью');
        })
            .finally(() => {
            setIsLoading(false);
        });
    },[]);

    if (isLoading) {
        return <Loading/>;
      }

    return(
        <View style={{ padding:20 }}>
            <PostImage source={{ uri: data.imageUrl }} />
            <PostText>
                {data.text}
            </PostText>
        </View>
    )
}

export default FullPostScreen