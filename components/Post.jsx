import styled from 'styled-components/native';
import {Image} from 'react-native'

const PostView = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
`;

const PostMore = styled.View`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  padding: 16px;
  background-color: #CADF9E;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: baseline;
`;

const Postcategory = styled.Text`
  font-size: 12px;
  color: #4A4A4A;
  background-color: rgba(202, 223, 158, 0.2);
  border: 1px;
  border-color: #CADF9E;
  border-style: solid;
  border-radius: 16px;
  padding: 4px 8px;
`;

const PostLink = styled.Text`
  font-size: 12px;
  color: #4A4A4A;
  background-color: #E6E6E6;
  border-radius: 16px;
  padding: 4px 8px;
`;

const PostFlex = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;


function getDomainName(link) {
  // Удаляем "https://" и "http://"
  link = link.replace(/(^\w+:|^)\/\//, '');

  // Получаем доменное имя (zakon.kz)
  const domainName = link.split('/')[0];

  // Удаляем "www." если есть
  if (domainName.startsWith('www.')) {
    return domainName.slice(4);
  }

  return domainName;
}

export const Post = ({ title, link, category }) => {
  const domain = link ? getDomainName(link) : '';
  return (
    <PostView>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostFlex>
          <PostLink>{domain}</PostLink>
          <Postcategory>{category}</Postcategory>
        </PostFlex>
      </PostDetails>
      <PostMore>
          <Image
            source={require('../assets/arrow.png')}
            style={{ width: 16, height: 16 }}
          />
        </PostMore>
    </PostView>
  );
};