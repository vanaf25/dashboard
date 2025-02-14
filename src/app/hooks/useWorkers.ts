import {useQuery} from "@tanstack/react-query";
import {getWorker, getWorkers} from "@/app/apis/workerApi";
import {Worker} from "@/app/types/workerTypes"
import {useParams} from "next/navigation";
export const useGetWorkersQuery=()=>{
    return useQuery<Worker[],Error>({
        queryKey: ["workers"],
        queryFn: () => getWorkers(),
        staleTime: 1000 * 60 * 5,
    });
}
export const useGetWorkerQuery=()=>{
    const { id } = useParams();
    return useQuery<Worker,Error>({
        queryKey: ["workers",id],
        queryFn: () => getWorker(id as string),
        staleTime: 1000 * 60 * 5,
    });
}