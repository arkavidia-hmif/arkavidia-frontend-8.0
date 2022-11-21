export interface UserDataRes {
  auth_token: string;
  username: string;
  team_id: number;
  team_name: string;
  team_category: number;
  leader_name: string;
  leader_email: string;
  member1_name: string;
  member1_email: string;
  member2_name: string;
  member2_email: string;
  stage: number;
}

// export interface UserResponse {
//   token: string;
//   data: UserData;
//   message: string;
// }