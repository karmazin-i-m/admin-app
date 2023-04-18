import { DeviceAction } from '../../../reducers/devicesReducer/Types/Device';
import style from './DeviceActionComponent.module.css'

const DeviceActionComponent = (props: { action: DeviceAction }) => {
    return (
        <div className={style.divDeviceActionComponent}>
            {props.action.Name}
        </div>
    )
};

export default DeviceActionComponent;