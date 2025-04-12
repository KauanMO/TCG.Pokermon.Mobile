import { baseUrl, getUserId } from "./config";
import axios from "axios";

const defaultUrl = `${baseUrl}/cards`;

const getCardsByUserId = async () => {
    const response = await axios.get(`${defaultUrl}/${getUserId()}`);

    if (response.status === 200) return response.data;

    console.warn(response);
}

export {
    getCardsByUserId
}