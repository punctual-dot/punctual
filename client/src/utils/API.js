import axios from "axios";

export default {
  
    getUsers: function() {
        return axios.get("/api/profile");
    },

    saveUser: function(userData) {
      return axios.post("/api/profile", userData)
    },

    getUser: function(id) {
      return axios.get("/api/profile/" + id);
    },

    addSymptomtoUser: function(id, symptomData) {
      return axios.post("/api/profile/" + id, symptomData)
    },

    getSymptoms: function() {
      return axios.get("/api/symptoms");
    },

    getSymptom: function(id) {
      return axios.get("/api/symptoms/"+ id);
    },
};