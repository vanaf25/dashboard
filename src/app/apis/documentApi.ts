import axios from "axios";

export  const fetchDocument = async (slug: string) => {
    const response = await axios.get(`/api/contracts/getDocument`,{params:{slug}});
    return response.data.data;
};
