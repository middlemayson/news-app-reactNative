import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  border: 1px;
  border-color: #E6E6E6;
  border-style: solid;
  border-radius: 16px;
  background-color: white;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 8px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
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
  border-radius: 26px;
  padding: 4px 10px;
  text-align: center;
`;

const PostLink = styled.Text`
  font-size: 12px;
  color: #4A4A4A;
  background-color: #E6E6E6;
  border-radius: 26px;
  padding: 4px 10px;
  text-align: center;
`;

const PostFlex = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;

function getDomainName(link) {
  link = link.replace(/(^\w+:|^)\/\//, '');
  const domainName = link.split('/')[0];
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
    </PostView>
  );
};