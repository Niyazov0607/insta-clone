import axios from "axios";
import { VITE_BASE_URL } from "./envVariables";

export const apiClient = axios.create({
    baseURL: VITE_BASE_URL + "/api",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
    },
});
