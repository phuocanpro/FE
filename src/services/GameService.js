import axios from "axios";
export const getAllGame = async (search) => {
  let res = {};
  if (search?.length > 0) {
    // res = await axios.get(
    //   `${process.env.REACT_APP_API_URL}/game/get-all?filter=name&filter=${search}`
    // );
  } else {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/game/get-all?limit=2`
    );
  }

  return res.data;
};
