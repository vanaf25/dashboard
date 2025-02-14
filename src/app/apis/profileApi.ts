import axios from "axios";
export const getProfile= async ()=>{
    const response=await axios.get(`/api/profile/get`)
    return response?.data
}