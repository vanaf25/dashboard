import { useMutation } from "@tanstack/react-query";
import measurementsApi from "@/app/apis/measurementApi";
import { useRouter } from "next/navigation";
import { CreateMeasurementsDto } from "@/app/types/measurementsTypes";

export const useCreateMeasurement = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (measurementData: CreateMeasurementsDto) => {
            return await measurementsApi.createMeasurement(measurementData);
        },
        onSuccess: (data) => {
            router.push(`/measurements/${data.id}`);
        },
        onError: (error) => {
            console.error("Error creating measurement:", error);
        }
    });
};