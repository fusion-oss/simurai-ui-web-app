import axios from "axios";
const BASE_URL = "http://localhost";
const port = "8093";
const fetcheventsAPI = "/events";
const triggereventsAPI = "/events?alias=";


export const fetchEvents = async () => {
    const data = await axios.get(`${BASE_URL}:${port}${fetcheventsAPI}`).then((response: any) => {
        return response?.data;
    }).catch((error) => console.log(error));

    return data;
}

export const triggerEvent = async (payload: any) => {
    const { alias, HEADER, BODY } = payload;
    const data = await axios.post(`${BASE_URL}:${port}${triggereventsAPI}${alias}`, { HEADER, BODY }).then((response: any) => {
        return response;
    }).catch((error) => console.log(error));

    return data;
}
