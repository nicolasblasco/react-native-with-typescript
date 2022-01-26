import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import clientType from './helper/clientType';
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
    .catch((error) => { error});
  }

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Radium Care</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Text style={styles.title}>Clients</Text>}
          keyExtractor={(item) => item.id.toString()}
          data={clients}
          refreshing={isLoading}
          onRefresh={onRefresh}
          style={styles.flatList}
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
  container: {
    alignItems: 'stretch'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#16C79A'
  },
  headerTitle: {
    fontSize: 20,
    color: '#19456B',
    fontWeight: '700'
  },
  title: {
    margin: 5,
    fontSize: 20,
    color: '#19456B'
  },
  flatList: {
    height: '90%',
  }
});

export default App;