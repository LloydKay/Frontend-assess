import axios from "axios";

const API_URL = "https://covidnigeria.herokuapp.com/api";

const getDisp = async () => {
  const res = await axios.get(API_URL);

  const data = res.data.data.states;

  // console.log(data);

  return data;
};

const dispService = {
  getDisp,
};

export default dispService;
