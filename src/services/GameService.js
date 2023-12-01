import axios from "axios";
export const getAllGame = async () => {
  // let res = {};
  // if (search?.length > 0) {
  //   // res = await axios.get(
  //   //   `${process.env.REACT_APP_API_URL}/game/get-all?filter=name&filter=${search}`
  //   // );
  // } else {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/game/get-all`);
  // }

  return res.data;
};
export const createGame = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/game/create`,
    data
  );
  return res.data;
};
