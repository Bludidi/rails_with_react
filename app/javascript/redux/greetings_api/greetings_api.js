import axios from 'axios';

const url = 'https://127.0.0.1:3000/api/v1/greetings';
const getGreeting = async () => {
  const response = await axios.get(url);
  return response.data;
};

export default getGreeting;