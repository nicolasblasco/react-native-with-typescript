import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Components/Home';
import Clients from '../Components/Clients';
import ClientForm from '../Components/Clients/Form';
import Login from '../Components/Auth/Login';

const ClientsStack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(true);
  }, []);

  function ClientStackScreen() {
    return (
      <ClientsStack.Navigator>
        <ClientsStack.Screen name="Clients" component={Clients} />
        <ClientsStack.Screen name="ClientForm" component={ClientForm} />
      </ClientsStack.Navigator>
    );
  }

  return isLogged ? (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen name="Clients" component={ClientStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
