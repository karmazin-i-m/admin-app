import { useEffect, useState } from 'react';
import style from './HeaderComponent.module.css'

let HeaderComponent = () => 
{
    let [date, changeDate] = useState(new Date());

    useEffect(() => 
    {
        const timer = setInterval(() => 
        {
            changeDate(new Date());
        }, 1000);
    })
    

    return (
    <div className={style.divHeaderComponent}>
        <img className={style.imgLogo} src="images/systemgroup-logo.png"/>
        <div className={style.divTime}>
                {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'})}
        </div>
    </div>)
};

export default HeaderComponent;