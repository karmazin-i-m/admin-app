export enum ItemState {
    Active = 0,
    Voided = 1
};

export interface Tag {
    id: string;
    name: string;
};

export interface Modifier extends BasketItem {
    minQuantity: number;
    maxQuantity: number;
    defaultQuantity: number;
}

export interface BasketItem {
    id: string;
    index: number;
    itemState: ItemState;
    name: string
    description: string
    price: number
    count: number
    tags: Array<Tag>
    modifiers: Array<Modifier>
};

export interface Basket {
    id: string;
    productItems: Array<BasketItem>
};