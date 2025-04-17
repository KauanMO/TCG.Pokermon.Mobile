import { LoginRequest, LoginResponse, UserInfo } from '../types/UserType';
import Config from './config';
import Mock from './mock';
import axios, { AxiosError } from 'axios';
import Storage from '@/services/storage';

const baseUrl: string = `${Config.baseUrl}/users`;

const login = async (data: LoginRequest): Promise<LoginResponse | null> => {
    try {
        const response = await axios.post<LoginResponse>(`${baseUrl}/login`,
            data
        );

        Storage.saveToken(response.data.token);
        Storage.saveCredentials(data);

        return response.data;
    } catch (e) {
        Storage.clearCredentials();
        Storage.clearToken();

        return null;
    }
}

const getUserInfo = async (): Promise<UserInfo | null> => {
    try {
        const response = await axios.get(`${baseUrl}/info`, {
            headers: {
                'Authorization': `Bearer ${await Storage.getToken()}`
            }
        });

        return response.data;
    } catch (e) {
        const error = e as AxiosError;

        return Mock.userInfoMock;
    }
}

export default {
    login,
    getUserInfo
}