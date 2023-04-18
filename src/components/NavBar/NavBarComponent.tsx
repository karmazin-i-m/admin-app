import { NavLink } from 'react-router-dom';
import style from './NavBarComponent.module.css'

let NavBarComponent = () => {

    var navLinkClassName = ({ isActive , isPending } : {isActive : boolean, isPending: boolean}) =>
    {
        return isActive ? style.divNavBarItem + " " + style.divNavBarItemActive : style.divNavBarItem;
    }

    return (
        <div className={style.divNavBarComponent} >
            <NavLink to='/devices' className={navLinkClassName}>
                <p>Devices</p>
                <img src="images/bank-terminal.svg" />
            </NavLink>
            <NavLink to='/logs' className={navLinkClassName}>
                <p>Logs</p>
                <img src="images/logs.svg" />
            </NavLink>
            <NavLink to='/logs1' className={navLinkClassName}>
                <p>Logs</p>
                <img src="images/logs.svg" />
            </NavLink>
            <NavLink to='/logs2' className={navLinkClassName}>
                <p>Logs</p>
                <img src="images/logs.svg" />
            </NavLink>
            <NavLink to='/logs3' className={navLinkClassName}>
                <p>Logs</p>
                <img src="images/logs.svg" />
            </NavLink>
            <NavLink to='/logs4' className={navLinkClassName}>
                <p>Logs</p>
                <img src="images/logs.svg" />
            </NavLink>
        </div>)
};

export default NavBarComponent;