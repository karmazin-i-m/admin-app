import { useAppSelector } from './hooks/selectorHook';
import { useAppDispatch } from './hooks/dispatchHook';
import { fetchHistoryAsync, selectCount } from './reducers/logsReducer/historyReducer';
import { OrderHistory } from './reducers/logsReducer/Types/HistoryTypes';
import OrderHistoryComponent from './components/OrderHistory/OrderHistoryComponent';
import style from './App.module.css';
import HeaderComponent from './components/Header/HeaderComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';
import { Route, Router, RouterProvider, Routes } from 'react-router';
import ContentLogsComponent from './components/ContentLogs/ContentLogsComponent';

const App = () => {
  return (
    <div className={style.divAppComoponent}>

      <div className={style.divHeaderComponent}>
        <HeaderComponent />
      </div>
      <div className={style.divNavBarComponent}>
        <NavBarComponent />
      </div>
      <div className={style.divContentComponent}>
        <Routes>
          <Route path="/" element={(<div>Home</div>)} />
          <Route path="/devices" element={(<div>Devices</div>)} />
          <Route path="/logs" element={(<ContentLogsComponent />)} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
