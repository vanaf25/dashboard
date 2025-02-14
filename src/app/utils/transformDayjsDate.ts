import dayjs from "dayjs";

export default (date?:any)=>date ? dayjs(date).format("DD/MM/YYYY"): "N/A"