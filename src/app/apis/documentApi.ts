import axios from "axios";
import axiosInstance from './config';
export  const fetchDocument = async (slug: string) => {
    console.log('fetched!:',slug);
    const response = await axios.get(`/api/contracts/getDocument`,{params:{slug}});
    return response.data.data;
};
export const updateQuote = async (docId:string, updateBody:any) => {
    try {
        const response = await axiosInstance.patch(`/contracts/update/${docId}`, updateBody);
        return response.data;
    } catch (error:any) {
        console.error('Error updating quote:', error.response?.data || error.message);
        throw error;
    }
};
export const createQuote = async (quoteBody: Record<string, any>): Promise<any> => {
    try {
        const response = await axiosInstance.post('/contracts/add', quoteBody);
        console.log('res:',response);
        return response.data;
    } catch (error: any) {
        console.error('Error creating quote:', error.response?.data || error.message);
        throw error;
    }
};