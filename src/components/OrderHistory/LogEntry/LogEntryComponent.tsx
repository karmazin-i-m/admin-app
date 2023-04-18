import { LogEntry } from "../../../reducers/logsReducer/Types/CommonTypes";
import style from "./LogEntryComponent.module.css";

const LogEntryComponent = (props: { log: LogEntry }) => {
    return (
        <div className={style.LogEntryComponent}>
            <p className={style.divGridColumn + ' ' + style.divGridColumnCenterText}>
                {props.log.creationTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'})}
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