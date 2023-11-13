import axios from "axios";

export const taskAPI = {
  getAllTask: async () => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}tasks`);
    return response.data;
  },
};
