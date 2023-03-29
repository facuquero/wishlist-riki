import axios from "axios";

export const createUser = (newUser) =>
  axios.post("http://localhost:3000/register", newUser);

export const checkUsernameAvailability = async (username) => {
  const response = await axios.get(`http://localhost:3000/check-username/${username}`, {
  });
  return response.data;
};
