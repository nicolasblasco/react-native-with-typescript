import React from 'react';
//import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import Navigator from './routes/homeStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <FlipperAsyncStorage />
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
