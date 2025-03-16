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

type RowData=any
interface TableData {
    tableName:string,
    rows:any[]}
interface CreateTableDto{
    name: string;
    group: string;
    columns: string[];
    rows: object[];
}
export const getAllRowsByType = async (type: string): Promise<RowData[] | ErrorResponse> => {
    try {
        const res: AxiosResponse<any[]> = await axiosInstance.get(`tables/allRows/${type}`);
        return res.data;
    } catch (e) {
        return { error: 'Some error happened' };
    }
};
export const getAllTablesByType = async (type: string): Promise<TableData[]> => {
    const res: AxiosResponse<TableData[]> = await axiosInstance.get(`tables/${type}`);
    return res.data;
}

export const createTable = async (data: CreateTableDto): Promise<TableData | ErrorResponse> => {
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
