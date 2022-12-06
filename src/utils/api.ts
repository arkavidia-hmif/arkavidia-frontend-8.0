const API = {
  auth: {
    register: '/sign-up',
    login: '/sign-in',
    logout: '/logout',
    changePass: '/change-password'
  },
  team: {
    compRegis: (compe: string) =>
      `/competition-registration?competition=${compe}`,
    teamData: '/get-team',
    memberData: '/get-member'
  },
  submission: {
    add: '/add-submission'
  },
  participant: {
    memberData: '/get-member',
    changeCareerInterest: (participantId: number | string) =>
      `/change-career-interest?participant_id=${participantId}`
  },
  photo: {
    photo: (participantId: number | string) =>
      `/get-photo?participant_id=${participantId}`,
    addPhoto: '/add-photo'
  }
}

export default API
