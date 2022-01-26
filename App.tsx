import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

  type clientType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

const App = () => {

  const [clients, setClients] = useState<clientType[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( async (response) => await response.json())
    .then((response) => {
      setClients(response)
    })
    .catch((error) => { error});
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Radium Care</Text>
        </View>
        <Text style={styles.title}>Clients</Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={clients}
          renderItem={({item}) => (
            <View style={styles.item}>
                <Text style={styles.itemData}>ID: {item.id}</Text>
                <Text style={styles.itemData}>Name: {item.name}</Text>
                <Text style={styles.itemData}>Email: {item.email}</Text>
            </View>
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
    height: 70,
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
  item: {
    margin: 5,
    padding: 10,
    backgroundColor: '#11698E'
  },
  itemData: {
    fontSize: 15,
    color: '#FFF'
  }
});

export default App;