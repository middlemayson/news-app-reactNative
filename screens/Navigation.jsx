import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Home';
import { NewsListScreen } from './NewsList';
import { ContactsScreen } from './Contacts';
import styled from 'styled-components/native';

const HeaderBlock = styled.View`
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: left;
  gap: 16px;
  padding: 16px;
  background-color: white;
  border: 1px;
  border-color: #E6E6E6;
  border-style: solid;
`;

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const CustomHeader = ({ title }) => {
  return (
    <HeaderBlock>
      <TitleText>{title}</TitleText>
    </HeaderBlock>
  );
};

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: ({ navigation }) => <CustomHeader navigation={navigation} title={route.params?.title || 'Default Title'} />,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} initialParams={{ title: 'Новости Казахстана' }} />
        <Tab.Screen name="NewsList" component={NewsListScreen} initialParams={{ title: 'Контакты СМИ' }} />
        <Tab.Screen name="Contacts" component={ContactsScreen} initialParams={{ title: 'Контакты' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
