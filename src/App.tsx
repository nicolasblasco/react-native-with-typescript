import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import Navigator from './routes/homeStack';
import ClientsContextProvider from './context/ClientsContext';

const App = () => {
  return (
    <ClientsContextProvider>
      <SafeAreaProvider>
        <FlipperAsyncStorage />
        <Navigator />
      </SafeAreaProvider>
    </ClientsContextProvider>
  );
};

export default App;
