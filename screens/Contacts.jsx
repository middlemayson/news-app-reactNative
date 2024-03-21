import styled from 'styled-components/native';

import React from 'react';
import {
  Alert,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Linking,
} from 'react-native';

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

export const ContactsScreen = ( ) => {

  return (
    <PostView>
        <Text>Hello</Text>
    </PostView>
  );
};