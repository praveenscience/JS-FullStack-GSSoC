import Axios from "axios";

export const GetUsers = () => {
  return Axios.get("/api/users");
};
