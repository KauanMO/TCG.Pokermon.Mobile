import axios, { AxiosError } from "axios";
import config from "./config";
import { CardInfo } from "../types/CardType";
import storage from "@/services/storage";

const baseUrl: string = `${config.baseUrl}/cards`;

const getMyCards = async (): Promise<CardInfo[]> => {
    try {
        const response = await axios.get(`${baseUrl}/my-cards`, {
            headers: {
                Authorization: `Bearer ${await storage.getToken()}`
            }
        });

        return response.data;
    } catch (e) {
        const error = e as AxiosError;

        return [];
    }
}

const openCardSet = async (setId: number, amount: number): Promise<CardInfo[]> => {
    try {
        const response = await axios.post(`${baseUrl}/open-set/${setId}?amount=${amount}`, {}, {
            headers: {
                Authorization: `Bearer ${await storage.getToken()}`
            }
        });

        return response.data;
    } catch (e) {
        const error = e as AxiosError;

        return [];
    }
}

export default {
    getMyCards,
    openCardSet
}