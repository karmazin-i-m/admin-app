import { Dispatch } from '@reduxjs/toolkit';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter} from './actions/CounterActionCreators'

const App: React.FC = () => {

  const counter: ICounter = useSelector(
    (state: CounterState) => state.counter,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const increment = React.useCallback(
    (counter: ICounter) => dispatch(incrementCounter()),
    [dispatch]
  );

  const decrement = React.useCallback(
    (counter: ICounter) => dispatch(decrementCounter()),
    [dispatch]
  )

  return (
    <div>
      <p>{counter.count}</p>
      <button onClick={() => increment(counter)}>+</button>
      <button onClick={() => decrement(counter)}>-</button>
    </div>
  );
}

export default App;
