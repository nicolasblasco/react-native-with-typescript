export type ClientType = {
  id: number;
  name: string;
  email: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Login: {setIsLogged: React.Dispatch<React.SetStateAction<boolean>>};
  Home: {setIsLogged: React.Dispatch<React.SetStateAction<boolean>>};
  User: undefined;
  ClientsList: undefined;
  AddClientForm: undefined;
  UpdateClientForm: {
    client?: ClientType | undefined;
  };
};
export interface iClientContext {
  clients: ClientType[] | null;
  loading: boolean;
  getClients: () => void;
  deleteClient: (id: number) => void;
  createClient: (client: ClientType) => void;
  updateClient: (client: ClientType) => void;
}
