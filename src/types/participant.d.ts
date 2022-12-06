import { FileType } from '@src/utils/customHooks/datadiri'

export interface ParticipantPhoto {
  participant_id: number
  status: 'waiting-for-verification' | 'verified' | 'declined'
  type: FileType
}

export interface MemberList {
  name: string
  email: string
  career_interest: string[]
  role: 'leader' | 'member'
}

export interface Participant {
  ID: number
  team_id: number
  participant_id: number
  role: 'leader' | 'member'
  team: MembershipTeam
  participant: MembershipParticipant
}

export interface Membership {
  ID: number
  team_id: number
  participant_id: number
  role: 'leader' | 'member'
  team: MembershipTeam
  participant: MembershipParticipant
  photos: ParticipantPhoto[] | null
}

export interface MembershipTeam {
  ID: number
  team_id?: number
  participant_id?: number
  username: string
  password: string | null
  team_name: string
  team_category: string
  memberships: string | null
  submission: string | null
}

export interface MembershipParticipant {
  ID: number
  name: string
  email: string
  career_interest: string[] | null
  memberships: string | null
  photos: ParticipantPhoto[] | null
}

export interface ParticipantData {
  ID: number
  name: string
  email: string
  career_interest: string[]
  memberships: Membership[]
  photos: ParticipantPhoto[] | null
}

export interface ParticipantDataRes {
  Data: ParticipantData
  Message: string
}

export interface ChangeCareerInterestReq {
  career_interest: string[]
}
