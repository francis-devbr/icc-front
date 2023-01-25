import axios from "axios";

export default axios.create({
  baseURL: "http://ti0045621:6029",
  headers: {
    "Content-type": "application/json"
  }
});