import * as actionTypes from "../actions/actionTypes"

const initialState: CounterState =
{
    counter:
    {
        count: 0
    }
};

export const counterReducer = (
    state: CounterState = initialState,
    action: CounterAction
): CounterState => {
    switch (action.type) {
        
        case actionTypes.INCREMENT_COUNTER:
            const newIncrementCounter: ICounter = {
                count: state.counter.count + 1
            }
            return {
                ...state,
                counter: newIncrementCounter,
            }

        case actionTypes.DECREMENT_COUNTER:
            const newDecrementCounter: ICounter = {
                count: state.counter.count - 1
            }
            return {
                ...state,
                counter: newDecrementCounter,
            }

    }
    return state
};


// export const counterReducer : Reducer<CounterState, AnyAction> = (state : CounterState = initialState, action : AnyAction) => 
// {
//     switch(action.type)
//     {
//         default:
//             return state;
//     }
// }