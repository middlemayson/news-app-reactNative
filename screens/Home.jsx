import axios from 'axios';
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
import { Post } from '../components/Post';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://cdn.contentful.com/spaces/stypbb3yjiot/entries?access_token=LmAVL9v-jStaF0Dl37VlyxiRmtRo_xYlUReid5vRNiI')
      .then(({ data }) => {
        // Обрабатываем данные, чтобы получить только необходимые поля
        const formattedData = data.items.map(item => ({
          title: item.fields.title,
          link: item.fields.link,
          category: item.fields.category,
        }));
        setItems(formattedData);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
            <Post title={item.title} category={item.category} link={item.link} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};