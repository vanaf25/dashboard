import {Client} from "@/app/components/Leads/Leads";

export  interface Status{
    title:string,
    description:string,
    status:string
}
export interface Meeting{
    id:number,
    client:Client
    date:string
}
export  interface FieldType{
    order:number,
    title:string,
    description:string
}
export interface Document{

}