import { useAppSelector } from './hooks/selectorHook';
import { useAppDispatch } from './hooks/dispatchHook';
import { fetchHistoryAsync, selectCount } from './reducers/logsReducer/historyReducer';
import { OrderHistory } from './reducers/logsReducer/Types/HistoryTypes';
import OrderHistoryComponent from './components/OrderHistory/OrderHistory';


const App = () => {

  const histories: Array<OrderHistory> = useAppSelector(selectCount);
  const dispath = useAppDispatch();
  
  return (
    <div>
      {histories.map(h => <OrderHistoryComponent history={h} />)}
      <button onClick={() => dispath(fetchHistoryAsync())}>Fetch</button>
    </div>
  );
}

export default App;
