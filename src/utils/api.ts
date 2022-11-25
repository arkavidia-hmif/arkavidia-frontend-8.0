const API = {
//   user: {
//       allUsers: '/user/get-all-users',
//       user: (id: number) => `/user/get-user/${id}`,
//       register: '/user/register',
//       login: '/user/login',
//       verify: (id: number) => `/user/verify-user/${id}`,
//   },
  request: {
    allRequest: '/request/get_all_requests',
    request: (id: number) => `/request/get_user_request/${id}`,
    create: '/request/create_request',
    approve: (id: number) => `/request/approve-request/${id}`,
    decline: (id: number) => `/request/decline-request/${id}`,
  },
  transaction: {
    allTransactions: '/transaction/get-all-transactions',
    userTransaction: (id: number) => `/transaction/get-users-transactions/${id}`,
    create: '/transaction/create_transaction',
  },
  auth: {
    register: '/sign-up',
    login: '/sign-in',
    logout: '/logout',
    changePass: '/change-password',
  },
  user: {
    compRegis: (id: number) => `/competition-registration?competition=${id}`
  }
}

export default API;