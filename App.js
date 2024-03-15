import React from 'react';
import { HomeScreen } from './screens/Home';
import { View, StatusBar } from 'react-native';

export default function App() {
  
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}