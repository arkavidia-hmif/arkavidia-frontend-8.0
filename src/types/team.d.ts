import { Participant, MemberList } from '@src/types/participant'

export interface TeamLoginReq {
  username: string;
  password: string;
}

export interface TeamRegisterReq {
  username: string;
  password: string;
  team_name: string;
  member_list: MemberList[];
}

export interface TeamData {
  username: string;
  password: string;
  team_name: string;
  team_category: string;
  memberships: Participant[];
  submission: string | null;
}

export interface ChangePassReq {
  password: string;
}

export interface TeamDataRes {
  Data: TeamAccountData;
  Message: string;
}