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
      <View>
      <Text style={styles.highlight}>React</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={clients}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  item: {

  }
});

export default App;