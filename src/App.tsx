import style from './App.module.css';
import HeaderComponent from './components/Header/HeaderComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';
import { Route, Routes } from 'react-router';
import ContentLogsComponent from './components/ContentLogs/ContentLogsComponent';
import ContentDevicesComponent from './components/ContentDevices/ContentDevicesComponent';

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
          <Route path="/devices" element={(<ContentDevicesComponent />)} />
          <Route path="/logs" element={(<ContentLogsComponent />)} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
