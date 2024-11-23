import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `https://kanbas-node-server-app-divit-2bc1b0d87817.herokuapp.com/api/modules`;
export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data;
};
export const updateModule = async (module: any) => {
    const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
  };
  

  
  