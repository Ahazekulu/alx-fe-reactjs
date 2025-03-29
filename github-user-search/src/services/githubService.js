import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const searchUsers = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  // Fetch detailed data for each user
  const usersWithDetails = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await fetchUserData(user.login);
      return userDetails;
    })
  );
  return { ...response.data, items: usersWithDetails };
};
