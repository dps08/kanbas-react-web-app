import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `https://kanbas-node-server-app-divit-2bc1b0d87817.herokuapp.com//api/assignments`;
export const deleteAssignment = async (assignmentId: string) => {
 const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
 return response.data;
};
export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
  };
  
