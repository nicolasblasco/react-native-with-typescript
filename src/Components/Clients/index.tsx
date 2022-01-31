import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ClientType, RootStackParamList} from '../../helper/types';
import ListItem from './Item';

type Props = NativeStackScreenProps<RootStackParamList, 'ClientsList'>;

const Clients = ({navigation}: Props) => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [isLoading, setLoading] = useState(false);

  const onRefresh = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async response => await response.json())
      .then(response => {
        setClients(response);
        setLoading(false);
      })
      .catch(error => {
        error;
      });
  };

  useEffect(() => {
    onRefresh();
  }, []);

  //delete client

  const deleteHandler = (id: number) => {
    setClients(prevClient => {
      Toast.show('Client deleted successfully!');
      return prevClient.filter(client => client.id !== id);
    });
  };

  //get data

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@storage_Key')
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch(e) {
  //     Alert.alert('Error!')
  //   }
  // }

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Clients</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddClientForm', {
                  clients: clients,
                  setClients: setClients,
                })
              }
              activeOpacity={0.4}
              style={styles.addButton}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        }
        keyExtractor={item => item.id.toString()}
        data={clients}
        refreshing={isLoading}
        onRefresh={onRefresh}
        renderItem={({item}) => (
          <ListItem
            id={item.id}
            name={item.name}
            email={item.email}
            onDelete={() => deleteHandler(item.id)}
            onUpdate={() =>
              navigation.navigate('UpdateClientForm', {
                clients: clients,
                selectedClient: {
                  id: item.id,
                  name: item.name,
                  email: item.email,
                },
                setClients: setClients,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 20,
    color: '#19456B',
  },
  addButton: {
    alignItems: 'center',
    padding: 5,
    width: 70,
    backgroundColor: '#19456B',
    borderRadius: 3,
  },
  add: {
    color: '#FFFFFF',
  },
});

export default Clients;
