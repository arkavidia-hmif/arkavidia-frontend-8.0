export interface RootState {
  auth: {
    token: string | null
    admin: boolean | null
  }
}
