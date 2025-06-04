export type CardsFiltersApplied = {
    orderBy: "name" | "price" | null,
    asc: Boolean | null,
    types: string[] | null
}