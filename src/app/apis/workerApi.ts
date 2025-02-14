import axios from "axios";

export const  getWorkers= async ()=>{
    try{
       const result=await  axios.get<{ workers: Worker[] }>("/api/workers/getAll")
        return result?.data?.workers
    }
    catch (err:any){
        return err.response?.data?.error || "Failed to load workers"
    }
}
export const  getWorker= async (id:string)=>{
    try{
        const result=await  axios.get<Worker>(`/api/workers/${id}`)
        return result?.data
    }
    catch (err:any){
        return err.response?.data?.error || "Failed to load workers"
    }
}