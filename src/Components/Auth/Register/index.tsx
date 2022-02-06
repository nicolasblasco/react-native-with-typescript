import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm} from 'react-hook-form';
import CustomInput from '../../Shared/Custom Input';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Credentials} from '../../../helper/types';
import Toast from 'react-native-simple-toast';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = ({navigation}: Props) => {
  const {control, handleSubmit} = useForm<Credentials>();

  const handleRegister = async (newUser: Credentials) => {
    try {
      const users = await AsyncStorage.getItem('users');
      const parsedUsers = users && JSON.parse(users);
      if (
        Array.isArray(parsedUsers) &&
        !parsedUsers.filter((user: Credentials) => user.email === newUser.email)
          .length
      ) {
        parsedUsers.push(newUser);
        return AsyncStorage.setItem('users', JSON.stringify(parsedUsers)).then(
          () => {
            Toast.show('User registered');
            navigation.navigate('Welcome');
          },
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Register</Text>
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
          name="password"
          placeholder="Password"
          control={control}
          keyboardType="default"
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long',
            },
          }}
        />
        <TouchableHighlight
          onPress={handleSubmit(handleRegister)}
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

export default Register;
