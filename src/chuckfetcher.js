import axios from 'axios';

const http = axios.create({
  baseURL: "http://api.icndb.com/",
  headers: {'Accept': 'application/json'}
})

export const ChuckFactFetcher = async function(callback1, callback2) {
  http.get("/jokes/random")
    .then(function(response) {
      callback1(response);
    })
    .catch(function() {
      callback2();
    });
}
