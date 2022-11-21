
export interface UserData {
  user_id: number;
  full_name: string;
  username: string;
  status: number;
  ktp: string;
  role: number;
  balance: number;
}

export interface UserRegister {
  full_name: string;
  username: string;
  ktp: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserResponse {
  token: string;
  data: UserData;
  message: string;
}