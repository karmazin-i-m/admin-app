interface ICounter {
    count: number
};

type CounterState = { counter : ICounter };

interface CounterAction extends Action<string> {
    type: string
    counter?: ICounter
};

type DispatchType = (args: CounterAction) => CounterAction;