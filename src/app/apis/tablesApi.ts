import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface ErrorResponse {
    error: string;
}

interface RowData {
    // Add appropriate types for row data
}

interface TableData {
    tableName:string,
    rows:any[]}

export const getAllRowsByType = async (type: string): Promise<RowData[] | ErrorResponse> => {
    try {
        const res: AxiosResponse<any[]> = await axiosInstance.get(`tables/allRows/${type}`);
        return res.data;
    } catch (e) {
        return { error: 'Some error happened' };
    }
};

export const getAllTablesByType = async (type: string): Promise<TableData[] | ErrorResponse> => {
    try {
        const res: AxiosResponse<TableData[]> = await axiosInstance.get(`tables/${type}`);
        return res.data;
    } catch (e) {
        return { error: 'Some error happened' };
    }
};

export const createTable = async (data: TableData): Promise<TableData | ErrorResponse> => {
    try {
        const res: AxiosResponse<TableData> = await axiosInstance.post('tables/createTable', data);
        return res.data;
    } catch (e) {
        return { error: 'Some error happened' };
    }
};

export const updateRowChanged = async (rowId: string, data: any): Promise<AxiosResponse | ErrorResponse> => {
    try {
        console.log('response started!!');
        const res: AxiosResponse = await axiosInstance.put(`tables/${rowId}`, data);
        return res;
    } catch (e) {
        return { error: 'Some error happened' };
    }
};