import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import {useForm} from 'react-hook-form';
import clientType from './helper/clientType';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
//login
import CustomInput from './Components/Shared/CustomInput';
import CustomButton from './Components/Shared/CustomButton';

const App = () => {

  const [clients, setClients] = useState<clientType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLogged, setLogged] = useState(false);

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
  } = useForm();

  const onSignInPressed = () => {
    console.log('works')
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.container}>
        <View>
          <View style={styles.loginView}>
            <Text style={styles.loginTitle}>Login</Text>
          </View>
          <CustomInput
            name='email'
            placeholder='Email'
            control={control}
            rules={{required: 'Email is required'}}
          />
          <CustomInput
            name='password'
            placeholder='Password'
            control={control}
            rules={{required: 'Password is required'}}
          />
          <CustomButton
            onPress={handleSubmit(onSignInPressed)}
            text='Submit'
          />
        </View>
        {isLogged && <FlatList
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
        />}
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