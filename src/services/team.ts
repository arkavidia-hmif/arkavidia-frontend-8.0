import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';

const URL = process.env.NEXT_PUBLIC_API_URL as string;

export const getTeamData = async () => {
  const { auth } = store.getState();
    try {
      const response = await axios(
        {
          method: 'GET',
          url: URL + API.team.teamData,
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

export const getMemberData = async () => {
  const { auth } = store.getState();
    try {
      const response = await axios(
        {
          method: 'GET',
          url: URL + API.team.memberData,
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

export const competitionRegistration = async (compe: string) => {
  const { auth } = store.getState();
  try {
    const response = await axios(
      {
        method: 'PUT',
        url: URL + API.team.compRegis(compe),
        headers: {
          Authorization: `Bearer ${auth.token}`
        },
      }
    ) 
    return response.data.Message;
  } catch (e) {
    return "FAILED";
  }
}