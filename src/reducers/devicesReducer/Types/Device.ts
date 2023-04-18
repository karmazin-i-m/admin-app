export interface Device
{
    Devices : Array<DeviceInfo>
}

export interface DeviceInfo{
    Type : string,
    Name : string,
    Actions : Array<DeviceAction>,
    IsError : boolean,
    ErrorDescription? : string
}

export interface DeviceAction{
    Name : string,
    Link : string
}