import axios from "axios";

const instance = axios.create({
    baseURL: "http://staging.webmynehost.com/consumercoverage/api",
});

export default instance;
