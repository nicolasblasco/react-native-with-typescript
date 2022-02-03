import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import Navigator from './routes/homeStack';
import ClientsContextProvider from './context/ClientsContext';
import {checkPermission, PERMISSION_TYPE} from './AppPermissions';

const App = () => {
  useEffect(() => {
    checkPermission(PERMISSION_TYPE.camera);
  }, []);

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
