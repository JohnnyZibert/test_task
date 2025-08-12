export interface Document {
  created_at: string;
  sended_at?: string;
  id: string;
  name: string;
  file: {
    path: string;
    type: "object_storage" | string;
  };
  status: number;
  document_manager_keys: DocumentManagerKey[];
  document_token: DocumentToken;
  document_user_keys: DocumentUserKey[];
  document_type: {
    name: string;
  };
}

type DocumentManagerKey = {
  signed_at?: string;
  id: string;
  did: string;
  mid: string;
  key: string;
  status: number;
  manager: {
    id: string;
    sname: string;
    fname: string;
    mname: string;
    email: string;
    rule: string;
  };
};

type DocumentUserKey = {
  signed_at?: string;
  id: string;
  did: string;
  uid: string;
  key: string | null;
  status: number;
  user: {
    id: string;
    sname: string;
    fname: string;
    mname: string | null;
    email: string;
    phone: string;
  };
};

type DocumentToken = {
  created_at: string;
  id: string;
  did: string;
  value: string;
  status: number;
};
