import axios from "axios";
import { CardSetInfo } from "../types/CardSetType";
import config from "./config";
import Mock from "./mock";

const baseUrl: string = `${config.baseUrl}/cardsets`;

const getCardSets = async (): Promise<CardSetInfo[]> => {
    try {
        const response = await axios.get(baseUrl);

        return response.data;
    } catch (e) {
        return Mock.cardSetMock;
    }
}

export default {
    getCardSets
}