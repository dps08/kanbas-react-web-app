
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });



export const ENROLLMENTS_API = "https://kanbas-node-server-app-divit-2bc1b0d87817.herokuapp.com/api/enrollments";
export const enrollUser = async (data: { courseId: string; userId: string }) => {
    console.log("Payload sent to enrollUser:", data); // Debugging
    const response = await axios.post(`${ENROLLMENTS_API}`, data);
    return response.data;
  };
  

  export const unenrollUser = async (unenrollment: { userId: string; courseId: string }) => {
    const response = await axios.delete(ENROLLMENTS_API, { data: unenrollment });
    return response.data;
  };
