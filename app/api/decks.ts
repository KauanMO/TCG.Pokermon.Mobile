import axios, { AxiosError } from "axios";
import { DeckExtraInfo, DeckInfo } from "../types/DeckType";
import Config from "./config";
import Storage from "@/services/storage";

const baseUrl: string = `${Config.baseUrl}/decks`;

const getMyDecks = async (): Promise<DeckExtraInfo[]> => {
    try {
        const response = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${await Storage.getToken()}`
            }
        });

        return response.data;
    } catch (e) {
        const error = e as AxiosError

        return [];
    }
}

export default {
    getMyDecks
}