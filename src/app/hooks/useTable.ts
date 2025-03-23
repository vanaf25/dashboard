import {useQuery} from "@tanstack/react-query";
import {getAllTablesByType} from "@/app/apis/tablesApi";
import {TableData} from "@/app/types/tablesTypes";

export const getTablesQuery=(tableGroup:string)=>{
     return  useQuery<TableData<any>[], any>({
         queryKey:[tableGroup],
         queryFn: () => getAllTablesByType(tableGroup),
         staleTime: Infinity,
     });
}