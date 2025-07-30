import { CardInfo } from "./CardType"

export type DeckInfo = {
    id: number,
    name: string,
    active: boolean
}

export type DeckExtraInfo = {
    deck: DeckInfo,
    mainCard: CardInfo,
    mainTypes: string[]
}