import { useState } from "react";
import { Basket } from "../../reducers/logsReducer/Types/BasketTypes";
import { OrderHistory } from "../../reducers/logsReducer/Types/HistoryTypes";
import { Order } from "../../reducers/logsReducer/Types/OrderTypes";
import LogEntryComponent from "./LogEntry/LogEntryComponent";
import style from "./OrderHistoryComponent.module.css"

const OrderHistoryComponent = (props: { history: OrderHistory }) => {

    let [isVisible, isVisibleChanged] = useState(false)

    const lastOrderState: Order | undefined = props.history.orderStates.at(-1);
    const basketLastState: Basket | undefined = props.history.basketHistory?.basketStates.at(-1);

    const logsArray = props.history.orderLogEntry
        .concat(...props.history.basketHistory?.basketLogEntry ?? [])
        .sort((a, b) => a.creationTime.getTime() - b.creationTime.getTime());

    return (
        <div className={style.divOrderHistoryComponent}>
            <div className={isVisible ? style.divStatus : style.divStatus + ' ' + style.divStatusIsVisible} onClick={() => isVisibleChanged(!isVisible)}>
                <div className={style.divStatusOrder}>
                    <p className={style.OrderStatusPatagraph}>Status: {lastOrderState?.orderState}</p>
                    <p className={style.OrderStatusPatagraph}>Created at: {lastOrderState?.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                    <p className={style.OrderStatusPatagraph}>Edited at: {lastOrderState?.editedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                </div>
                <div className={style.divStatusDevice}>
                    <div className={style.divDevice}>Terminal</div>
                    <div className={style.divDevice}>Syrve</div>
                    <div className={style.divDevice}>Printer</div>
                </div>
            </div>
            {
                isVisible &&
                <div>
                    <div className={style.divLogs}>
                        <div>
                            {logsArray.map(log => <LogEntryComponent log={log} />)}
                        </div>
                    </div>

                    <div className={style.divBasket}>
                        <div>
                            {basketLastState?.productItems.map(product => <div>{product.count} x {product.name}</div>)}
                        </div>
                        <div>
                            Totals: {lastOrderState?.totalSum}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default OrderHistoryComponent;