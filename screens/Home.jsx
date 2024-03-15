import React from 'react';
import { Text, Alert, View, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../componets/Post';
import axios from 'axios';

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    
      axios.get('https://65f3cc3a105614e654a127d4.mockapi.io/article').then(({ data }) => {
        setItems(data);
      }).catch(err => {
        console.log(err);
        Alert.alert('Ошибка!', 'Не удалось получить статьи');
      })
    .finally(() => {
      setIsLoading(false);
    });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (<View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }} >
      <ActivityIndicator size="large" />
      <Text style={{ marginTop:16,}}>Загрузка...</Text>
    </View>);
  }
  
  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}