import { produce } from 'immer'
import Button from '../components/Button'
import { useReducer } from 'react'
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'
const CHANGE_VALUE_TO_ADD = 'change-value-to-add'
const ADD_TO_COUNT = 'add-to-count'

const reducer = (state, action) => {
    switch(action.type){
        case(INCREMENT_COUNT): 
            state.count = state.count + 1
            return
        case(DECREMENT_COUNT): 
            state.count = state.count - 1
            return
        case(ADD_TO_COUNT): 
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return
        case(CHANGE_VALUE_TO_ADD): 
            state.valueToAdd = action.payload
            return
        default:
            return
    }
}

function CounterPage({initialCount}){
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount, 
        valueToAdd: 0
    })

    const {count, valueToAdd} = state

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: ADD_TO_COUNT,
        });
        
        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: 0
        });
    }

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is: {count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input 
                    type="number" 
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                    value={valueToAdd}
                    onChange={handleChange}
                />
                <Button>Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage