export interface AuthLoginReq {
  username: string;
  password: string;
}

export interface AuthRegisterReq {
  username: string;
  password: string;
  leader_name: string;
  leader_email: string;
  member1_name: string;
  member1_email: string;
  member2_name: string;
  member2_email: string;
}