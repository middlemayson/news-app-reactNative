import styled from 'styled-components';

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
const  PostDate = styled.Text`
  font-size: 14px;
  color: gray;
`;
const  PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;



export const Post = ({ title, imageUrl, createdAt }) => {
    return (
    <PostView>
        <PostImage source={{uri: imageUrl}}/>
        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDate>{createdAt}</PostDate>
        </PostDetails>
    </PostView>
    )
}