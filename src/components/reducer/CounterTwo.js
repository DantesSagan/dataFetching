import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='text-center text-3xl '>
      <div className='p-4'>
        First Counter - {count.firstCounter} Second Counter -{' '}
        {count.secondCounter}
      </div>
      <div className='border border-green-500 rounded-lg m-4'>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={() => dispatch({ type: 'increment', value: 1 })}
        >
          Increment
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => dispatch({ type: 'decrement', value: 1 })}
        >
          Decrement
        </button>

        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={() => dispatch({ type: 'increment', value: 5 })}
        >
          Increment 5
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => dispatch({ type: 'decrement', value: 5 })}
        >
          Decrement 5
        </button>
      </div>
      <div className='border border-white rounded-lg'>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={() => dispatch({ type: 'increment2', value: 10 })}
        >
          Increment Counter 2
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => dispatch({ type: 'decrement2', value: 10 })}
        >
          Decrement Counter 2
        </button>
      </div>

      <button
        className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </button>
    </div>
  );
}
