import { getUserId } from '@/services/storage';
import { LoginRequest, LoginResponse, UserInfo } from '../types/user';
import { baseUrl } from './config';
import { userInfoMock } from './mock';
import axios from 'axios';

const defaultUrl: string = `${baseUrl}/users`;

export const login = async (data: LoginRequest): Promise<LoginResponse | null> => {
    try {
        const response = await axios.post<LoginResponse>(`${defaultUrl}/login`,
            data
        );

        return response.data;
    } catch (e) {
        return null;
    }
}

export const getUserInfo = async (): Promise<UserInfo | null> => {
    try {
        const response = await axios.get(`${defaultUrl}/${getUserId()}`);

        return response.data;
    } catch (e) {
        return userInfoMock;
    }
}