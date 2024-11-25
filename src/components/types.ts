export type ItemType = {
    listing_id: number,
    url: string,
    MainImage: {url_570xN: string},
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}

export interface ItemsList {
    items: ItemType[],
}
