import { baseAxiosInstance } from './config';
import {CreateMeasurementsDto, Measurement} from "@/app/types/measurementsTypes";

const measurementsApi = {
    createMeasurement: async (measurementData:CreateMeasurementsDto) => {
            const response = await baseAxiosInstance.post('/measurements/create', measurementData);
            return response.data;
    },
    getMeasurement: async (id:string) => {
            const response = await baseAxiosInstance.get<Measurement>(`/measurements/${id}`);
            return response?.data;
    }
};

export default measurementsApi;
