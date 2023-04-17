import style from './HeaderComponent.module.css'

let HeaderComponent = () => 
{
    return (
    <div className={style.divHeaderComponent}>
        <img className={style.imgLogo} src="https://systemgroup.com.ua/sites/default/files/logo_systemgroup_red_uk__0.jpg"/>
        <div className={style.divTime}>
                {new Date().toLocaleTimeString()}
        </div>
    </div>)
};

export default HeaderComponent;