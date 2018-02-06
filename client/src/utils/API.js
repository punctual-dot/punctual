import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/profile");
  },
};