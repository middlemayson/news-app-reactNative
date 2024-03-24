import React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Home';
import { NewsListScreen } from './NewsList';
import { ContactsScreen } from './Contacts';
import styled from 'styled-components/native';

import HomeIconActive from '../assets/icon/home_active.png';
import HomeIconInactive from '../assets/icon/home_inactive.png';
import NewsListIconActive from '../assets/icon/news_active.png';
import NewsListIconInactive from '../assets/icon/news_inactive.png';
import ContactsIconActive from '../assets/icon/contacts_active.png';
import ContactsIconInactive from '../assets/icon/contacts_inactive.png';

const HeaderBlock = styled.View`
  
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

const CustomHeader = ({title }) => {
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
      <StatusBar barStyle="light-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: ({ navigation }) => <CustomHeader navigation={navigation} title={route.params?.title || 'Default Title'} />,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            height: 68,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'gray',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            switch (route.name) {
              case 'Home':
                iconSource = focused ? HomeIconActive : HomeIconInactive;
                break;
              case 'NewsList':
                iconSource = focused ? NewsListIconActive : NewsListIconInactive;
                break;
              case 'Contacts':
                iconSource = focused ? ContactsIconActive : ContactsIconInactive;
                break;
              default:
                break;
            }
            return <Image source={iconSource} style={{ width: size, height: size }} />;
          },
        })}
      >
        <Tab.Screen
          name="Home" 
          component={HomeScreen} 
          initialParams={{ title: 'Новости Казахстана' }}
          options={{
            tabBarLabel: 'Новости',
          }}
        />
        <Tab.Screen
          name="NewsList"
          component={NewsListScreen}
          initialParams={{ title: 'Контакты СМИ' }}
          options={{
            tabBarLabel: 'Контакты СМИ',
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactsScreen}
          initialParams={{ title: 'Контакты' }}
          options={{
            tabBarLabel: 'Контакты',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};