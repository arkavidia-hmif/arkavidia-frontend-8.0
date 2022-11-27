const API = {
  auth: {
    register: '/sign-up',
    login: '/sign-in',
    logout: '/logout',
    changePass: '/change-password',
  },
  team: {
    compRegis: (compe: string) => `/competition-registration?competition=${compe}`,
    teamData: '/get-team-data'
  }
}

export default API;