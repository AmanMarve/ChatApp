import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://hii-chat-backend.vercel.app/api" : "/api",
    withCredentials: true
})