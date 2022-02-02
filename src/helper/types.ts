export type ClientType = {
  id: number;
  name: string;
  email: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Home: undefined;
  ClientsList: undefined;
  AddClientForm: undefined;
  UpdateClientForm: {
    client?: ClientType | undefined;
    //clientId: number;
  };
};
export interface iClientContext {
  clients: ClientType[] | null;
  loading: boolean;
  deleteClient: (id: number) => void;
  createClient: (client: ClientType) => void;
  updateClient: (client: ClientType) => void;
}
