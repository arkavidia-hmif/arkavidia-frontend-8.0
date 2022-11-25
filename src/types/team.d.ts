import { Participant, MembershipTeam, MemberList } from '@src/types/participant'

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
  memberships: MembershipTeam[];
  submission: string | null;
}


export interface ChangePassReq {
  old_password: string;
  new_password: string;
}

export interface TeamDataRes {
  Data: TeamAccountData;
  Message: string;
}