import React from 'react';
//import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Components/Home';
import Clients from './Components/Clients';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen name="Clients" component={Clients} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
