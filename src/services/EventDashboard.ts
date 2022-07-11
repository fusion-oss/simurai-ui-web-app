import axios from "axios";
const BASE_URL = "http://localhost";
const port = "8093";
const eventsAPI = "/events";

export const fetchEvents = async () => {
    const data = await axios.get(`${BASE_URL}:${port}/${eventsAPI}`).then((response: any) => {
       
        return response?.data;
    }).catch((error) => console.log(error));
  
    return data;
}
