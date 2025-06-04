export type CardInfo = {
    id: number | null,
    name: string,
    externalCode: string,
    rarity: string,
    description: string | null,
    types: string[],
    subTypes: string[],
    evolvesFrom: string | null,
    images: {
        small: string,
        large: string
    },
    price: number,
    quality: number
}

export type CardsInfoAndTotalCount = {
    cards: CardInfo[],
    totalCards: number
}