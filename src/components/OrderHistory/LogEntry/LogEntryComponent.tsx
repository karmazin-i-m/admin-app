import { LogEntry } from "../../../reducers/logsReducer/Types/CommonTypes";
import style from "./LogEntryComponent.module.css";

const LogEntryComponent = (props: { log: LogEntry }) => {
    return (
        <div className={style.LogEntryComponent}>
            <p className={style.divGridColumn + ' ' + style.divGridColumnCenterText}>
                {props.log.creationTime.getHours().toString().padStart(2,'0')}:{props.log.creationTime.getMinutes().toString().padStart(2,'0')}:{props.log.creationTime.getSeconds().toString().padStart(2,'0')} 
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