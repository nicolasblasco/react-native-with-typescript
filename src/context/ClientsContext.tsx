import React, {FC, useState, useEffect} from 'react';
import {createContext} from 'react';
import {ClientType, iClientContext} from '../helper/types';
import Toast from 'react-native-simple-toast';

export const ClientsContext = createContext<iClientContext | null>(null);

const ClientsContextProvider: FC = ({children}) => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [loading, setLoading] = useState(false);

  const getClients = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => {
        setClients(response);
        setLoading(false);
      })
      .catch(error => {
        error;
      });
  };

  useEffect(() => {
    getClients();
  }, []);

  const deleteClient = (id: number) => {
    setClients(prevClient => {
      Toast.show('Client deleted successfully.');
      return prevClient.filter(client => client.id !== id);
    });
  };

  const createClient = (client: ClientType) => {
    setClients([
      ...clients,
      {
        id: Math.max(...clients.map(o => o.id), 0) + 1,
        name: client.name,
        email: client.email,
      },
    ]);
  };

  const updateClient = (client: ClientType) => {
    setClients(
      clients.map(c => {
        if (c.id === client.id) {
          c.name = client.name;
          c.email = client.email;
        }

        return c;
      }),
    );
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        loading,
        deleteClient,
        createClient,
        updateClient,
      }}>
      {children}
    </ClientsContext.Provider>
  );
};

export default ClientsContextProvider;
