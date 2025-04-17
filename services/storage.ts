import { UserCredencials } from "@/app/types/UserType";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveToken = async (token: string) => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.error('error saving token: ', error)
    }
}

const getToken = async (): Promise<string | null> => {
    try {
        const token = await AsyncStorage.getItem('token');

        return token ? token : null;
    } catch (error) {
        console.error('error getting token: ', error)

        return null;
    }
}

const saveCredentials = async (credencials: UserCredencials): Promise<void> => {
    try {
        await AsyncStorage.setItem('email', credencials.email as string);
        await AsyncStorage.setItem('password', credencials.password as string);
    } catch (e) {
        console.error(e);
    }
}

const getCredentials = async (): Promise<UserCredencials | null> => {
    const credencials: UserCredencials = {
        email: await AsyncStorage.getItem('email'),
        password: await AsyncStorage.getItem('password')
    }

    return credencials.email && credencials.password
        ? credencials
        : null;
}

const clearCredentials = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('password');
    } catch (e) {
        console.error(e);
    }
}

const clearToken = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (e) {
        console.error(e);
    }
}

export default {
    saveToken,
    getToken,
    saveCredentials,
    getCredentials,
    clearCredentials,
    clearToken
}