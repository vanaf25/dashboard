import {useQuery} from "@tanstack/react-query";
import {getProfile} from "@/app/apis/profileApi";

export const useGetProfileQuery=()=>{
    return useQuery<any,Error>({
        queryKey: ["profile"],
        queryFn: () => getProfile(),
        staleTime: 1000 * 60 * 5,
    });
}