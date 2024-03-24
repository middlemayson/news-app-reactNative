import styled from 'styled-components/native';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

const PostView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
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

const StyledLink = styled.Text`
  color: #4A4A4A;
  background-color: #CADF9E;
  border: 1px;
  border-color: #CADF9E;
  border-style: solid;
  border-radius: 26px;
  padding: 8px 16px;
  text-align: center;
`;

const GrayText = styled.Text`
  color: gray;
`;

const ContactEmail = () => {
  const email = 'teseradigital1@gmail.com';
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <TouchableOpacity onPress={handleEmailPress}>
      <StyledLink>Написать</StyledLink>
    </TouchableOpacity>
  );
};

export const ContactsScreen = ( ) => {
  return (
    <PostView>
        <Text>Контактный E-mail:</Text>
        <ContactEmail />
        <Text>Все материалы принадлежат правообладателям. Приложение несет ознокомительный характер с новостной лентой.</Text>
        <GrayText>Приложение разработано в Казахстане.</GrayText>
    </PostView>
  );
};