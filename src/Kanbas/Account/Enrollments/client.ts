import axios from "axios";
export const REMOTE_SERVER = "https://kanbas-node-server-app-divit-2bc1b0d87817.herokuapp.com";
export const USERS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const unEnrollUser = async (courseId: any) => {
    const { data } = await axiosWithCredentials.delete(`${USERS_API}/current/${courseId}/enrollments`);
    return data;
}

export const enrollUser = async (courseId: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/${courseId}/enrollments`);
    return data;
}