import axios, { AxiosError } from "axios";
import config from "./config";
import { CardInfo, CardsInfoAndTotalCount, CardsObtainedCount } from "../types/CardType";
import storage from "@/services/storage";
import { CardsFiltersApplied } from "../types/Filters";
import GlobalVariables from "../utils/GlobalVariables";

const baseUrl: string = `${config.baseUrl}/cards`;

const getMyCards = async (filters: CardsFiltersApplied | null, page: number): Promise<CardsInfoAndTotalCount> => {
    try {
        let params: string = `?orderBy=${filters?.orderBy ?? 'createdDate'}&asc=${filters?.asc ?? 'false'}`

        filters?.types?.forEach(type => {
            params += `&cardTypes=${type}`
        });

        const response = await axios.get(`${baseUrl}/my-cards${params}&page=${page}&pageSize=${GlobalVariables.myCardsDisplayCount}`, {
            headers: {
                Authorization: `Bearer ${await storage.getToken()}`
            }
        });

        return response.data;
    } catch (e) {
        const error = e as AxiosError;

        return {
            cards: [],
            totalCards: 0
        };
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

const cardsObtainedSet = async (setId: number): Promise<CardsObtainedCount[]> => {
    try {
        const response = await axios.get(`${baseUrl}/cards-obtained-set?cardSetId=${setId}`, {
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

const sellCardById = async (ids: (number | null)[]): Promise<void> => {
    try {
        const query = ids.map(id => `ids=${id}`).join('&');

        await axios.delete(`${baseUrl}/sell?${query}`, {
            headers: {
                Authorization: `Bearer ${await storage.getToken()}`
            }
        });
    } catch (e) {
        const error = e as AxiosError
    }
}

export default {
    getMyCards,
    openCardSet,
    cardsObtainedSet,
    sellCardById
}