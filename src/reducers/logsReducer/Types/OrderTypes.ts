export enum OrderState {
    New,
    Active,
    Finished,
    Suspend,
    Canceled
};

export interface Order {
    id: string;
    basketId: string;
    invoiceId: string;
    orderState: OrderState;
    totalSum: number;
    discaunt: number;
    amount: number;
    createdAt: Date;
    editedAt: Date;
};