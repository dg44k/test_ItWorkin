import axios from 'axios';

interface GameDataType {
	energy: number;
	coins: number;
}

const API_BASE_URL = 'http://127.0.0.1:8002/test';
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getGameData = async () => {
  try {
    const response = await api.get('/user_entry_check/');
    return response.data;
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw error;
  }
};

export const createGameData = async (data: GameDataType) => {
  try {
    const response = await api.post(`/user_exit/`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating game data:', error);
    throw error;
  }
};
