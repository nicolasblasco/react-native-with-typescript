import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {useForm, SubmitHandler} from 'react-hook-form';
import CustomInput from '../../Shared/CustomInput';
import {ClientType, RootStackParamList} from '../../../helper/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'AddClientForm'>;
interface newClient {
  id: number;
  name: string;
  email: string;
}

const AddClientForm = ({navigation, route}: Props) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const params = route.params;
  const clients = params.clients;
  //VER
  const setClients = params.setClients;

  useEffect(() => {
    console.log(clients);
  }, [clients]);

  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm<ClientType>();

  const addClient: SubmitHandler<newClient> = data => {
    setClients([
      ...clients,
      {
        id: Math.max(...clients.map(o => o.id), 0) + 1,
        name: data.name,
        email: data.email,
      },
    ]);
    navigation.navigate('ClientsList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Client</Text>
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
          onPress={handleSubmit(addClient)}
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

export default AddClientForm;
