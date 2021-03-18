import axios from "axios";

export const getPageData = async (pageNumber) => {
  const response = await axios.get(
    `https://reqres.in/api/users?page=${pageNumber}`
  );
  const data = response.data;
  return data;
};

export const getUserData = async (ID) => {
  const response = await axios.get(`https://reqres.in/api/users/${ID}`);
  const data = response.data;
  return data;
};
