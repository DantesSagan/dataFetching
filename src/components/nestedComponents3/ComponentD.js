import React, { useContext } from 'react';
import { CountContext } from '../UseContextUseReducer1';

export default function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div className='text-center'>
      <div className="p-4">Component D - {countContext.countState}</div>
      <button
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
        onClick={() => countContext.countDispatch('increment')}
      >
        Increment
      </button>
      <button
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        onClick={() => countContext.countDispatch('decrement')}
      >
        Decrement
      </button>
      <button
        className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
        onClick={() => countContext.countDispatch('reset')}
      >
        Reset
      </button>
    </div>
  );
}
