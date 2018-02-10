import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/profile");
  },
  saveUser: function(userData) {
    return axios.post("/api/profile", userData)
  },
  getUser: function(id) {
    return axios.get("/api/profile/" + id);
  },
};