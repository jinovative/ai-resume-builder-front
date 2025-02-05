import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("Base URL:", BASE_URL);

const axiosClient = axios.create({
    baseURL: `${BASE_URL ? BASE_URL + "/api/" : "https://deluxe-mooncake-0a6055.netlify.app/api/"}`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
});

const CreateNewResume = (data) => axiosClient.post("/user-resumes", data);

const GetUserResumes = (userEmail) => axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

const UpdateResumeDetail = (id, data) => axiosClient.put("/user-resumes/" + id, data);

const GetResumeById = (id) => axiosClient.get("/user-resumes/" + id + "?populate=*");

const DeleteResumeById = (id) => axiosClient.delete("/user-resumes/" + id);

export default {
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById,
};
