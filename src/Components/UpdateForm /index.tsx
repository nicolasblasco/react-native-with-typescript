import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ClientType, RootStackParamList} from '../../helper/types';
import CustomInput from '../Shared/Custom Input';

type Props = NativeStackScreenProps<RootStackParamList, 'UpdateClientForm'>;
interface updateClient {
  id: number;
  name: string;
  email: string;
}

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const UpdateClientForm = ({navigation, route}: Props) => {
  const {clients, selectedClient, setClients} = route.params;

  const {
    control,
    handleSubmit,
    setValue,
    formState: {},
  } = useForm<ClientType>();

  useEffect(() => {
    setValue('name', selectedClient.name);
    setValue('email', selectedClient.email);
  }, [selectedClient.email, selectedClient.name, setValue]);

  const updateClient: SubmitHandler<updateClient> = data => {
    setClients(
      clients.map(client => {
        if (client.id === selectedClient.id) {
          client.name = data.name;
          client.email = data.email;
        }
        return client;
      }),
    );
    navigation.navigate('ClientsList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Update Client</Text>
      </View>
      <View>
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          keyboardType="email-address"
          rules={{
            required: 'Email is required',
            pattern: {
              value: emailRegex,
              message: 'Email format not valid',
            },
          }}
        />
        <CustomInput
          name="name"
          placeholder="Name"
          control={control}
          keyboardType="default"
          rules={{
            required: 'Name is required',
          }}
        />
        <TouchableHighlight
          onPress={handleSubmit(updateClient)}
          underlayColor="#16C79A"
          style={styles.button}>
          <Text style={styles.buttonTitle}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#19456B',
  },
  button: {
    alignItems: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#19456B',
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default UpdateClientForm;
