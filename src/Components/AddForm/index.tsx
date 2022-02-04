import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {ClientType, RootStackParamList} from '../../helper/types';
import CustomInput from '../Shared/Custom Input';
import {ClientsContext} from '../../context/ClientsContext';

type Props = NativeStackScreenProps<RootStackParamList, 'AddClientForm'>;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const AddClientForm = ({navigation}: Props) => {
  const clientsContext = useContext(ClientsContext);

  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm<ClientType>();

  const onSubmit = (data: ClientType) => {
    clientsContext?.createClient(data);
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
          onPress={handleSubmit(onSubmit)}
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
