import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const searchUsers = async (query) => {
  const response = await axios.get('https://api.github.com/search/users?q", "location", "minRepos', {
    params: { q: query },
  });
  return response.data;
};
