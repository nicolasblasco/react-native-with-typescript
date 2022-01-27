import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Pressable
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
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
      storeData(data);
      setLogged(true);
    }
  };

  //store data

  const storeData = async (value: Data) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      Alert.alert('Error!')
    }
  }

  //get data

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      Alert.alert('Error!')
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlipperAsyncStorage />
      <Header />
      <View style={styles.container}>
        {
          isLogged ? <FlatList
            ListHeaderComponent={
              <View style={styles.header}>
                <Text style={styles.title}>Clients</Text>
                <Pressable style={styles.addButton}>
                  <Text style={styles.add}>Add</Text>
                </Pressable>
              </View>
            }
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5
  },
  title: {
    fontSize: 20,
    color: '#19456B'
  },
  addButton: {
    alignItems: 'center',
    padding: 5,
    width: 70,
    backgroundColor: '#19456B',
    borderRadius: 3
  },
  add: {
    color: '#FFFFFF'
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