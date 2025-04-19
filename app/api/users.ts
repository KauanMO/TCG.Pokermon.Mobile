import { LoginRequest, LoginResponse, RegisterRequest, UserInfo } from '../types/UserType';
import Config from './config';
import Mock from './mock';
import axios, { AxiosError } from 'axios';
import Storage from '@/services/storage';

const baseUrl: string = `${Config.baseUrl}/users`;

const register = async (data: RegisterRequest): Promise<LoginResponse | null> => {
    try {
        console.log(data);
        
        const response = await axios.post<LoginResponse>(`${baseUrl}`, {
            data
        });

        console.log(response);
        

        return await login({ email: data.email, password: data.password });
    } catch (e) {
        const error = e as AxiosError;

        console.log(error.response);

        return null;
    }
}

const login = async (data: LoginRequest): Promise<LoginResponse | null> => {
    try {
        const response = await axios.post<LoginResponse>(`${baseUrl}/login`,
            data
        );

        Storage.saveToken(response.data.token);
        Storage.saveCredentials(data);

        return response.data;
    } catch (e) {
        const error = e as AxiosError;

        // console.log(error.response);

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
    register,
    login,
    getUserInfo
}