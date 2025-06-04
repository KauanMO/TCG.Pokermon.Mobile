import { CardInfo } from "./CardType"

export type CardSetInfo = {
    id: number,
    externalId: string,
    name: string,
    series: string,
    symbol: string,
    logo: string,
    price: number,
    firstCardImage: string,
    secondCardImage: string,
    thirdCardImage: string
}

export type CardSetCards = {
    cardSet: CardSetInfo,
    cards: CardInfo[],
    totalCount: number
}