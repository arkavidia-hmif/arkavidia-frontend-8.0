import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';

const URL = process.env.NEXT_PUBLIC_API_URL as string

export const getTeamMembersData = async () => {
  const { auth } = store.getState();
    try {
      const response = await axios(
        {
          method: 'GET',
          url: URL + API.participant.memberData,
          headers: {
            Authorization: `Bearer ${auth.token}`
          },
        }
      ) 
      return response.data;
    } catch (e) {
      return "FAILED";
    }
};