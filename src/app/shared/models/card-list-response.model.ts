import { Card } from "./card.model"

export interface CardListResponse {
    data: Card[],
    has_more: boolean,
    next_page: string,
    object: string,
    total_cards: number
}