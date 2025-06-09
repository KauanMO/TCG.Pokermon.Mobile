import axios from "axios";
import { DeckInfo } from "../types/DeckType";
import Config from "./config";
import Storage from "@/services/storage";

const baseUrl: string = `${Config.baseUrl}/decks`;

const getMycards = async (): Promise<DeckInfo[]> => {
    try {
        const response = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${await Storage.getToken()}`
            }
        });

        return response.data;
    } catch (e) {
        return [];
    }
}

export default {
    getMycards
}