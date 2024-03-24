import styled from 'styled-components/native';
import React from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';

const PostView = styled.View`
  flex-direction: column;
  align-items: flex-start;
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

const TextLine = styled.Text`
  line-height: 24px;
  text-decoration: underline;
`;

export const NewsListScreen = ( ) => {
    const mediaData = [
        { name: 'Baige News', link: 'https://baigenews.kz/' },
        { name: 'DKNews', link: 'https://dknews.kz/' },
        { name: 'Forbes Kazakhstan', link: 'https://forbes.kz/' },
        { name: 'Inbusiness.kz', link: 'https://inbusiness.kz/ru' },
        { name: 'Informburo', link: 'https://informburo.kz/' },
        { name: 'KazInform', link: 'http://www.inform.kz/ru' },
        { name: 'NewTimes.kz', link: 'https://newtimes.kz/' },
        { name: 'Nur.kz', link: 'https://www.nur.kz/' },
        { name: 'Orda', link: 'https://orda.kz/' },
        { name: 'Ratel.kz', link: 'https://ratel.kz/' },
        { name: 'Stopfake.kz', link: 'https://stopfake.kz/' },
        { name: 'Tengrinews', link: 'https://tengrinews.kz/' },
        { name: 'Zakon.kz', link: 'http://www.zakon.kz/' },
        { name: 'Власть', link: 'https://vlast.kz/' },
        { name: 'Информбюро', link: 'https://informburo.kz/' },
        { name: 'Настоящее Время', link: 'https://www.currenttime.tv/kazakhstan' },
        { name: 'Радио Азаттык', link: 'https://rus.azattyq.org/' },
        { name: 'ТоболИнфо', link: 'https://tobolinfo.kz/' }
    ];

    const openLink = (url) => {
        Linking.openURL(url);
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => openLink(item.link)}>
                <TextLine>«{item.name}»</TextLine>
            </TouchableOpacity>
        );
    };

  return (
    <PostView>
      <Text>В приложении используются следующие источники новостей:</Text>
        <FlatList
        data={mediaData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        />
    </PostView>
  );
};