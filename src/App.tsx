import { useAppSelector } from './hooks/selectorHook';
import { useAppDispatch } from './hooks/dispatchHook';
import { decrement, increment, selectCount } from './reducers/counterReducer';


const App = () => {

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
