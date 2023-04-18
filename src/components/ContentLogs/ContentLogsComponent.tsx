import { useAppDispatch } from '../../hooks/dispatchHook';
import { useAppSelector } from '../../hooks/selectorHook';
import { OrderHistory } from '../../reducers/logsReducer/Types/HistoryTypes';
import { fetchHistoryAsync, selectHistories } from '../../reducers/logsReducer/historyReducer';
import OrderHistoryComponent from '../OrderHistory/OrderHistoryComponent';
import style from './ContentLogsComponent.module.css'

const ContentLogsComponent = () => {
    const histories: Array<OrderHistory> = useAppSelector(selectHistories);
    const dispath = useAppDispatch();

    return (
        <div>
            {histories.map(h => <OrderHistoryComponent history={h} />)}
            <button children="Fetch" onClick={() => dispath(fetchHistoryAsync())} />
        </div>)
}

export default ContentLogsComponent;