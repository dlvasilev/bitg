import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID PLACE_YOUR_KEY_HERE"
  }
});
