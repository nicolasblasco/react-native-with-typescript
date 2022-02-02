import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../helper/types';
import ListItem from '../Shared/Item';
import {ClientsContext} from '../../context/ClientsContext';

type Props = NativeStackScreenProps<RootStackParamList, 'ClientsList'>;

const ClientsList = ({navigation}: Props) => {
  const clientsContext = useContext(ClientsContext);

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Clients</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddClientForm')}
              activeOpacity={0.4}
              style={styles.addButton}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
        }
        keyExtractor={item => item.id.toString()}
        data={clientsContext?.clients}
        refreshing={clientsContext?.loading}
        renderItem={({item}) => (
          <ListItem
            id={item.id}
            name={item.name}
            email={item.email}
            onDelete={() => clientsContext?.deleteClient(item.id)}
            onUpdate={() =>
              navigation.navigate('UpdateClientForm', {
                client: item,
              })
            }
          />
        )}
      />
    </View>
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

export default ClientsList;
