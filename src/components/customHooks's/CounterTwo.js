import React from 'react';
import UseCounter from './Hooks/UseCounter';

export default function CounterTwo() {
  const [count, increment, decrement, reset] = UseCounter(10, 10);
  return (
    <div>
      <div
        className='list-outside text-center text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <h2>Count - {count}</h2>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={increment}
        >
          Increment
        </button>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={reset}
        >
          Reset
        </button>
      </div>{' '}
    </div>
  );
}
