import axios from "axios";
export const getAllGame = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/game/get-all`);
  return res.data;
};
