import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Components/Home';
import Welcome from '../Components/Welcome';
import ClientsList from '../Components/ClientsList';
import AddClientForm from '../Components/AddForm';
import UpdateClientForm from '../Components/UpdateForm ';
import Login from '../Components/Auth/Login';
import User from '../Components/User';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(true);
  }, []);

  function ClientsStackScreen() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: '',
        }}>
        <Stack.Screen name="ClientsList" component={ClientsList} />
        <Stack.Screen name="AddClientForm" component={AddClientForm} />
        <Stack.Screen name="UpdateClientForm" component={UpdateClientForm} />
      </Stack.Navigator>
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
            } else if (route.name === 'User') {
              return (
                <Ionicons
                  name={focused ? 'person-circle' : 'person-circle-outline'}
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
        <Tab.Screen name="Clients" component={ClientsStackScreen} />
        <Stack.Screen name="User" component={User} />
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
