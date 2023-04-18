import { useState } from 'react';
import { DeviceInfo } from '../../../reducers/devicesReducer/Types/Device';
import style from './DeviceComponent.module.css';
import DeviceActionComponent from './DeviceActionComponent';

const DeviceComponent = (props: { device: DeviceInfo }) => {

    let [isVisible, changeVisible] = useState(false);

    return (
        <div className={style.divDeviceComponent} onClick={() => changeVisible(!isVisible)}>
            <div className={props.device.IsError ? style.divDeviceStatusError : style.divDeviceStatusError + " " + style.divDeviceStatusSuccess}/>
            <p>Name: {props.device.Name}</p>
            {
                isVisible &&
                <div className={style.divDeviceActions}>
                    {props.device.Actions.map(a => <DeviceActionComponent action={a}/>)}
                </div>
            }
        </div>
    )
}

export default DeviceComponent;