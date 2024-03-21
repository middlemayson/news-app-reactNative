import React, { useRef } from 'react';
import { View, Text, Image, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home';
import { NewsListScreen } from './NewsList';
import { ContactsScreen } from './Contacts';
import { Menu } from '../components/Menu';
import styled from 'styled-components/native';

const HeaderBlock = styled.View`
  position: relative; /* Добавляем относительное позиционирование */
  height: 10px; /* Установите высоту по вашему желанию */
`;

const NaviBtn = styled.View`
  position: absolute; /* Добавляем абсолютное позиционирование */
  top: 0; /* Поместите кнопку вверху */
  left: 16px; /* Расположите кнопку слева с отступом */
  width: 32px; /* Задайте ширину кнопки */
  height: 32px; /* Задайте высоту кнопки */
`;


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  return (
      <DrawerLayoutAndroid
        ref={drawerRef}
        drawerWidth={200}
        drawerPosition={'left'}
        renderNavigationView={() => <Menu onClose={() => drawerRef.current.closeDrawer()} />}
      >
        <HeaderBlock>
        <NaviBtn>
            <TouchableOpacity onPress={openDrawer}>
              <Image source={require('../assets/hamburger_icon.png')} style={{width:16, height:16}} />
            </TouchableOpacity>
          </NaviBtn>
          </HeaderBlock>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Новости Казахстана' }} />
              <Stack.Screen name="NewsList" component={NewsListScreen} options={{ title: 'Контакты СМИ' }} />
              <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Контакты' }} />
            </Stack.Navigator>
          </NavigationContainer>
        
      </DrawerLayoutAndroid>
  );
};
