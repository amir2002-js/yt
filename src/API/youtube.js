import axios from "axios";

const KEY = "AIzaSyDczkAOGLc3ks12L0RiCatlxQh_gKHPRBw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
    },
});
