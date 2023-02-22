import { OrderHistory } from "../../reducers/logsReducer/Types/HistoryTypes";

const OrderHistoryComponent = (props: { history: OrderHistory }) => {
    return (
        <div>
            <p>{props.history.orderId}</p>
        </div>
    )
}

export default OrderHistoryComponent;