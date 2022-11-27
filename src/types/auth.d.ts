export interface LoginRes {
  // Token
  Data: string;
  Message: string;
}

export interface Auth {
  token: string | null;
}