import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import clientType from './helper/clientType';
import Header from './Components/Header';
import ListItem from './Components/ListItem';

const App = () => {

  const [clients, setClients] = useState<clientType[]>([]);
  const [isLoading, setLoading] = useState(false);

  const onRefresh = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( async (response) => await response.json())
    .then((response) => {
      setClients(response);
      setLoading(false);
    })
    .catch((error) => {error});
  }

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Text style={styles.title}>Clients</Text>}
          keyExtractor={(item) => item.id.toString()}
          data={clients}
          refreshing={isLoading}
          onRefresh={onRefresh}
          renderItem={({item}) => (
            <ListItem
              id={item.id}
              name={item.name}
              email={item.email}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  title: {
    margin: 5,
    fontSize: 20,
    color: '#19456B'
  }
});

export default App;