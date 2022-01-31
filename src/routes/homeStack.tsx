import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Components/Home';
import Welcome from '../Components/Welcome';
import Clients from '../Components/Clients';
import ClientsForm from '../Components/Clients/Form';
import Login from '../Components/Auth/Login';

const ClientsStack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  const [isLogged, setLogged] = useState(true);

  useEffect(() => {
    setLogged(true);
  }, []);

  function ClientStackScreen() {
    return (
      <ClientsStack.Navigator
        screenOptions={{
          headerTitle: '',
        }}>
        <ClientsStack.Screen name="ClientsList" component={Clients} />
        <ClientsStack.Screen name="ClientsForm" component={ClientsForm} />
      </ClientsStack.Navigator>
    );
  }

  return isLogged ? (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Clients') {
              return (
                <Ionicons
                  name={focused ? 'list' : 'list-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarActiveTintColor: '#16C79A',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen name="Clients" component={ClientStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
