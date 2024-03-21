import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export const Menu = ({ onClose, navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <TouchableOpacity onPress={onClose}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Закрыть меню</Text>
      </TouchableOpacity>

      <Text onPress={() => navigation.navigate('ContactsScreen')}>Open</Text>

    </View>
  );
};