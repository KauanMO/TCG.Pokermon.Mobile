import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserId = async (id: number) => {
    try {
        await AsyncStorage.setItem('userId', id.toString());
    } catch (error) {
        console.error('error saving userId: ', error)
    }
}

export const getUserId = async (): Promise<number | null> => {
    try {
        const id = await AsyncStorage.getItem('userId');

        return id ? parseInt(id) : null;
    } catch (error) {
        console.error('error saving userId: ', error)

        return null;
    }
}