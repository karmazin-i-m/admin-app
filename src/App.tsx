import { useAppSelector } from './hooks/selectorHook';
import { useAppDispatch } from './hooks/dispatchHook';
import { fetchHistoryAsync, selectCount } from './reducers/logsReducer/historyReducer';
import { OrderHistory } from './reducers/logsReducer/Types/HistoryTypes';
import OrderHistoryComponent from './components/OrderHistory/OrderHistoryComponent';
import style from './App.module.css';
import HeaderComponent from './components/Header/HeaderComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';

const App = () => {

  const histories: Array<OrderHistory> = useAppSelector(selectCount);
  const dispath = useAppDispatch();
  
  return (
    <div className={style.divAppComoponent}>
      <div className={style.divHeaderComponent}>
        <HeaderComponent/>
      </div>
      <div className={style.divNavBarComponent}>
        <NavBarComponent/>
      </div>
      <div className={style.divContentComponent}>
        {histories.map(h => <OrderHistoryComponent history={h} />)}
        <button children="Fetch" onClick={() => dispath(fetchHistoryAsync())}/>
      </div>
    </div>
  );
}

export default App;
