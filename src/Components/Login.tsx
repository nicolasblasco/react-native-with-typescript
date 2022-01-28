import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from './Shared/CustomInput';
import CustomButton from './Shared/CustomButton';
interface Data {
  email: string;
  password: string;
}

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = () => {
  //const [isLogged, setLogged] = useState(false);

  const admin = {
    email: 'Admin@gmail.com',
    password: 'Admin123',
  };

  const {
    control,
    handleSubmit,
    //formState: {errors},
  } = useForm<Data>();

  const userLogin = (data: Data) => {
    if (data.email !== admin.email) {
      return Toast.show('Invalid user, try again.');
    }
    if (data.password !== admin.password) {
      return Toast.show('Invalid password, try again.');
    }
    storeData(data);
    //setLogged(true);
  };

  //store user's credentials

  const storeData = async (value: Data) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      console.log('Error!');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.loginView}>
        <Text style={styles.loginTitle}>Login</Text>
      </View>
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
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be minimum 8 characters long',
          },
        }}
      />
      <CustomButton onPress={handleSubmit(userLogin)} text="Submit" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginTitle: {
    fontSize: 30,
    color: '#19456B',
  },
});

export default Login;
