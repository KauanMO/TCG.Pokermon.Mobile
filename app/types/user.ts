export type LoginRequest = {
    email: string,
    password: string
}

export type LoginResponse = {
    id: number,
    username: string,
    email: string
}

export type UserInfo = {
    id?: number,
    username: string,
    createdDate: string,
    balance: number,
    cardAmount: number,
    deckAmount: number
}