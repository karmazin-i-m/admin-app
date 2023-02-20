import * as actionTypes from "./actionTypes"

export function incrementCounter(counter?: ICounter) {
  const action: CounterAction = {
    type: actionTypes.INCREMENT_COUNTER,
    counter,
  }
  return action;
}

export function decrementCounter(counter?: ICounter) {
  const action: CounterAction = {
    type: actionTypes.DECREMENT_COUNTER,
    counter,
  }
  return (dispatch: DispatchType) =>  dispatch(action);
}
