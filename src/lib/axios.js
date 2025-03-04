import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://hii-chat-backend.vercel.app/api",
    withCredentials: true,
})