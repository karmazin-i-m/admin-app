import { Basket } from "./BasketTypes";
import { LogEntry } from "./CommonTypes";
import { Order } from "./OrderTypes";

export interface BasketHistory
{
    basketId : string;
    editedAt : Date;
    basketStates : Array<Basket>;
    basketLogEntry : Array<LogEntry>;
}

export interface OrderHistory
{ 
    orderId : string;
    orderStates : Array<Order>;
    orderLogEntry : Array<LogEntry>;
    basketHistory : BasketHistory | null;
};

export interface History
{
    Histories : Array<OrderHistory>
}