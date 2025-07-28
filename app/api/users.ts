import { LoginRequest, LoginResponse, RegisterRequest, UserInfo } from '../types/UserType';
import Config from './config';
import Mock from './mock';
import axios, { AxiosError } from 'axios';
import Storage from '@/services/storage';
import Toast from 'react-native-toast-message';

const baseUrl: string = `${Config.baseUrl}/users`;

const register = async (data: RegisterRequest): Promise<LoginResponse | null> => {
    try {
        await axios.post<LoginResponse>(`${baseUrl}`, data);

        return await login({ email: data.email, password: data.password });
    } catch (e) {
        const error = e as AxiosError;

        Toast.show({
            type: 'error',
            text1: 'Erro ao se cadastrar',
            text2: error.response?.data as string
        });

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

        Toast.show({
            type: 'error',
            text1: 'Erro ao fazer login',
            text2: error.response?.data as string
        });

        logOff();

        return null;
    }
}

const logOff = async (): Promise<void> => {
    Storage.clearCredentials();
    Storage.clearToken();
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

const updateFavoritePokemonCode = async (pokemonCode: number): Promise<void> => {
    try {
        await axios.patch(`${baseUrl}/favorite-pokemon-code?pokemonCode=${pokemonCode}`, {}, {
            headers: {
                'Authorization': `Bearer ${await Storage.getToken()}`
            }
        });
    } catch (e) {
        const error = e as AxiosError;
    }
}

var userInfo: UserInfo | null | undefined;

export default {
    register,
    login,
    getUserInfo,
    updateFavoritePokemonCode,
    logOff,
    userInfo
}