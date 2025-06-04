export type UserCredencials = {
    email: string | null,
    password: string | null
}

export type UserInfo = {
    id?: number,
    username: string,
    createdDate: string,
    balance: number,
    cardAmount: number,
    deckAmount: number,
    favoritePokemonCode: number,
    hashedEmail?: string
}

export type LoginRequest = {
    email: string,
    password: string
}

export type LoginResponse = {
    id: number,
    username: string,
    email: string,
    token: string
}

export type RegisterRequest = {
    username: string,
    email: string,
    password: string
}