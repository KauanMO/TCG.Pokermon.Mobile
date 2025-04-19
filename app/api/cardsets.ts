import axios, { AxiosError } from "axios";
import { CardSetCards, CardSetInfo } from "../types/CardSetType";
import config from "./config";
import Mock from "./mock";
import GlobalVariables from "../utils/GlobalVariables";
import Storage from "@/services/storage";

const baseUrl: string = `${config.baseUrl}/cardsets`;

const getCardSets = async (): Promise<CardSetInfo[]> => {
    try {
        const response = await axios.get(baseUrl);

        return response.data;
    } catch (e) {
        return Mock.cardSetMock;
    }
}

const getCardSetById = async (id: number, page: number): Promise<CardSetCards> => {
    try {
        const response = await axios.get(`${baseUrl}/${id}?page=${page}&pageSize=${GlobalVariables.cardsDisplayCount}`, {
            headers: {
                'Authorization': `Bearer ${await Storage.getToken()}`
            }
        });

        return response.data;
    } catch (e) {
        return Mock.cardSetCardsMock[page - 1];
    }
}

export default {
    getCardSets,
    getCardSetById
}