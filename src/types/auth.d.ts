export interface LoginRes {
  // Token
  data: string
  message: string
}

export interface ErrorRes {
  data: {
    message?: string
  }
}

export interface Auth {
  token: string | null
}
