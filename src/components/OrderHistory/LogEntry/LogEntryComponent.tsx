import { LogEntry } from "../../../reducers/logsReducer/Types/CommonTypes";
import style from "./LogEntryComponent.module.css";

const LogEntryComponent = (props: { log: LogEntry }) => {
    return (
        <div className={style.LogEntryComponent}>
            <p className={style.divGridColumn}>
                {props.log.creationTime.getHours()}:{props.log.creationTime.getMinutes()}:{props.log.creationTime.getSeconds()} 
            </p>
            <p className={style.divGridColumn}>
                {props.log.source}
            </p>
            <p className={style.divGridColumn}>
                {props.log.text} 
            </p>
        </div>
    )
}

export default LogEntryComponent;