export type ClientType = {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Home: undefined;
  ClientsList: undefined;
  AddClientForm: {
    // clients: ClientType[];
    // setClients: React.Dispatch<React.SetStateAction<ClientType[]>>;
    client?: ClientType | undefined;
    onSubmit: (client: ClientType) => void;
  };
  UpdateClientForm: {
    // clients: ClientType[];
    // selectedClient: {
    //   id: number;
    //   name: string;
    //   email: string;
    // };
    // setClients: React.Dispatch<React.SetStateAction<ClientType[]>>;
    clientId?: number;
    client?: ClientType | undefined;
    onSubmit: (client: ClientType) => void;
  };
};

export interface iClientContext {
  clients: ClientType[] | null;
  loading: boolean;
  deleteClient: (id: number) => void;
  createClient: (client: ClientType) => void;
  updateClient: (client: ClientType) => void;
}
