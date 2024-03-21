import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const Menu = ({ onClose }) => {
  const handleMenuItemPress = (menuItem) => {
    console.log(`Выбран пункт меню: ${menuItem}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <TouchableOpacity onPress={onClose}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Закрыть меню</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuItemPress('Привет')}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Привет</Text>
      </TouchableOpacity>
    </View>
  );
};
