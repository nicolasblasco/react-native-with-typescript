import React, {useState, useEffect, useReducer} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert
} from 'react-native';
import {useForm} from 'react-hook-form';
import clientType from './helper/clientType';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
//login
import CustomInput from './Components/Shared/CustomInput';
import CustomButton from './Components/Shared/CustomButton';
interface Data {
  email: string,
  password: string
}

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const App = () => {

  const [clients, setClients] = useState<clientType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLogged, setLogged] = useState(false);
  const admin = {
    email: 'Admin@gmail.com',
    password: 'Admin123'
  }

  const onRefresh = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( async (response) => await response.json())
    .then((response) => {
      setClients(response);
      setLoading(false);
    })
    .catch((error) => {error});
  }

  useEffect(() => {
    onRefresh();
  }, []);

  //login

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Data>();

  const onSignInPressed = (data: Data) => {
    if(data.email === admin.email && data.password === admin.password) {
      setLogged(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.container}>
        {
          isLogged ? <FlatList
            ListHeaderComponent={<Text style={styles.title}>Clients</Text>}
            keyExtractor={(item) => item.id.toString()}
            data={clients}
            refreshing={isLoading}
            onRefresh={onRefresh}
            renderItem={({item}) => (
              <ListItem
                id={item.id}
                name={item.name}
                email={item.email}
              />
            )}
          /> :
          <View>
            <View style={styles.loginView}>
              <Text style={styles.loginTitle}>Login</Text>
            </View>
            <CustomInput
              name='email'
              placeholder='Email'
              control={control}
              keyboardType='email-address'
              rules={
                {
                  required: 'Email is required',
                  pattern: {
                    value: emailRegex,
                    message: 'Email format not valid'
                  }
                }
              }
            />
            <CustomInput
              name='password'
              placeholder='Password'
              control={control}
              keyboardType='default'
              rules={
                { required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password should be minimum 8 characters long',
                  }
                }
              }
            />
            <CustomButton
              onPress={handleSubmit(onSignInPressed)}
              text='Submit'
            />
        </View>
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  title: {
    margin: 5,
    fontSize: 20,
    color: '#19456B'
  }
  /*LOGIN*/
  ,
  loginView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  loginTitle: {
    fontSize: 30,
    color: '#19456B'
  },

});

export default App;