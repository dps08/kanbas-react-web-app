import axios from "axios";
export const REMOTE_SERVER = "https://kanbas-node-server-app-divit-2bc1b0d87817.herokuapp.com";
export const USERS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
};

export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
};

export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};

export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};

export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses`);
    return data;
}

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};

export const fetchEnrollmentsForUser = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/enrollments`);
    return data;
}



