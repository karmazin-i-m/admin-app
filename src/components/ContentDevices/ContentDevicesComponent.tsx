import { useAppSelector } from '../../hooks/selectorHook';
import { DeviceInfo } from '../../reducers/devicesReducer/Types/Device';
import { selectDevices } from '../../reducers/devicesReducer/deviceReducer';
import style from './ContentDevicesComponent.module.css';
import DeviceComponent from './DeviceComponent/DeviceComponent';

const ContentDevicesComponent = () => 
{
    const devices: Array<DeviceInfo> = useAppSelector(selectDevices);
    return (
        <div>
            {devices.map(d => <DeviceComponent device={d}/>)}
        </div>)
}

export default ContentDevicesComponent;