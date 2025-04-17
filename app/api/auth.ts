import axios from "axios";
import config from "./config";
import Storage from "@/services/storage";

const baseUrl = `${config.baseUrl}/auth`;

const checkToken = async (): Promise<void> => {
    await axios.get(baseUrl, {
        headers: {
            'Authorization': `Bearer ${await Storage.getToken()}`
        }
    });
}

export default {
    checkToken
}