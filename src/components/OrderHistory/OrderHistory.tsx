import { Basket } from "../../reducers/logsReducer/Types/BasketTypes";
import { OrderHistory } from "../../reducers/logsReducer/Types/HistoryTypes";
import { Order } from "../../reducers/logsReducer/Types/OrderTypes";
import style from "./OrderHistory.module.css"

const OrderHistoryComponent = (props: { history: OrderHistory }) => {

    const lastOrderState: Order | undefined = props.history.orderStates.at(-1);
    const basketLastState: Basket | undefined = props.history.basketHistory?.basketStates.at(-1);

    const logsArray = props.history.orderLogEntry
                                   .concat(...props.history.basketHistory?.basketLogEntry ?? [])
                                   .sort((a,b) => a.creationTime.getTime() - b.creationTime.getTime());

    return (
        <div>
            <div className={style.divStatus}>
                <p className={style.OrderStatusPatagraph}>Status: {lastOrderState?.orderState}</p>
                <p className={style.OrderStatusPatagraph}>Created: {lastOrderState?.createdAt}</p>
                <p className={style.OrderStatusPatagraph}>Edited: {lastOrderState?.editedAt}</p>
            </div>

            <div className={style.divLogs}>
                LOGS:
                <div>
                    {logsArray.map(log => <div>{log.creationTime.toLocaleTimeString()} {log.text}</div>)}
                </div>
            </div>

            <div className={style.divBasket}>
                Basket:
                <div>
                    {basketLastState?.productItems.map(product => <div>{product.count} x {product.name}</div>)}
                </div>
                <div>
                    Totals: {lastOrderState?.totalSum}
                </div>
            </div>
        </div>
    )
}

export default OrderHistoryComponent;