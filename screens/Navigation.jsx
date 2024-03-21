import React, { useRef } from 'react';
import { Image, DrawerLayoutAndroid, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home';
import { NewsListScreen } from './NewsList';
import { ContactsScreen } from './Contacts';
import { Menu } from '../components/Menu';
import styled from 'styled-components/native';

const HeaderBlock = styled.View`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: left;
  
`;

const NaviBtn = styled.View`
  width: 32px;
  height: 32px;
left: 16px;
`;


const Stack = createNativeStackNavigator();

const CustomHeader = ({ openDrawer, title }) => {
  return (
    <HeaderBlock>
      <NaviBtn>
        <TouchableOpacity onPress={openDrawer}>
          <Image source={require('../assets/hamburger_icon.png')} style={{ width: 16, height: 16 }} />
        </TouchableOpacity>
      </NaviBtn>
      <Text>{title}</Text>
    </HeaderBlock>
  );
};

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            header: ({ navigation }) => <CustomHeader openDrawer={openDrawer} navigation={navigation} title={route.params?.title || 'Default Title'} />,
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} initialParams={{ title: 'Новости Казахстана' }} />
          <Stack.Screen name="NewsList" component={NewsListScreen} initialParams={{ title: 'Контакты СМИ' }} />
          <Stack.Screen name="Contacts" component={ContactsScreen} initialParams={{ title: 'Контакты' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DrawerLayoutAndroid>
  );
};
