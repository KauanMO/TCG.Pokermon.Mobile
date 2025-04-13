import { getUserId } from '@/services/storage';
import { LoginRequest, LoginResponse, UserInfo } from '../types/UserType';
import Config from './config';
import Mock from './mock';
import axios from 'axios';

const baseUrl: string = `${Config.baseUrl}/users`;

const login = async (data: LoginRequest): Promise<LoginResponse | null> => {
    try {
        const response = await axios.post<LoginResponse>(`${baseUrl}/login`,
            data
        );

        return response.data;
    } catch (e) {
        return null;
    }
}

const getUserInfo = async (): Promise<UserInfo | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${getUserId()}`);

        return response.data;
    } catch (e) {
        return Mock.userInfoMock;
    }
}

export default {
    login,
    getUserInfo
}