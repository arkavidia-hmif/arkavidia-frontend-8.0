import axios from 'axios';
import API from '@src/utils/api';
import { store } from '@src/redux/store/index';
import { isStaging } from './env';

// Brute force to change API endpoint for short-term dev purpose only
const ENV = isStaging;

const HOST = {
  STG: 'https://arkavidia-backend-8-0-staging-6d47ozplva-et.a.run.app',
  PROD: 'https://arkavidia-backend-8-0-6d47ozplva-et.a.run.app'
}

const URL = HOST.PROD;


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