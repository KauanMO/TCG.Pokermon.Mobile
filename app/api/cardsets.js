import { baseUrl } from "./config";
import axios from "axios";
import { cardsDisplayCount } from "../utils/GlobalVariables";

const defaultUrl = `${baseUrl}/cardsets`

const getCardSets = async () => {
    const response = await axios.get(defaultUrl);

    if (response.status == 200) return response.data

    console.warn(response)
}

const getCardSetById = async (cardSetId, page) => {
    const response = await axios.get(`${defaultUrl}/${cardSetId}?page=${page}&pageSize=${cardsDisplayCount}`);

    if (response.status === 200) return response.data;

    console.warn(response);
}

export {
    getCardSets,
    getCardSetById
}