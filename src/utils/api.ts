const API = {
  auth: {
    register: '/team/',
    login: '/team/sign-in',
    logout: '/logout',
    changePass: '/team/password'
  },
  team: {
    compRegis: (compe: string) => `/team/registration?competition=${compe}`,
    teamData: '/team/',
    memberData: '/get-member'
  },
  submission: {
    add: '/submission/'
  },
  participant: {
    memberData: '/participant/',
    changeCareerInterest: (participantId: number | string) =>
      `/participant/career-interest?participant_id=${participantId}`
  },
  photo: {
    photo: (participantId: number | string) =>
      `/photo/?participant_id=${participantId}`,
    addPhoto: '/photo/'
  },
  admin: {
    login: '/admin/sign-in',
    allTeam: (
      page: number | string,
      size: number | string,
      competition: string
    ) => `/team/all?page=${page}&size=${size}&team_category=${competition}`,
    participants: (teamID: number | string) =>
      `/participant/?team_id=${teamID}`,
    changePhotoStatus: (id: number | string) => `/photo/status?photo_id=${id}`
  }
}

export default API
