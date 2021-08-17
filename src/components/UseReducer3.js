import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import CounterThree from './reducer/CounterThree';

const Component = () => {
  const codeString = `
import React from 'react';
import CounterThree from './reducer/counterThree';

    export default function UseReducer() {
  return (
    <div>
      <CounterThree />
    </div>
  );
}
.
.
.
// gets component(CounterThree) from reducer
=>
.
.
.
import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div className='text-center text-3xl '>
      <div>
        <div className='p-4' id='example'>
          Count - {count}
        </div>

        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={() => dispatch('increment')}
        >
          Increment
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => dispatch('decrement')}
        >
          Decrement
        </button>
        <button
          className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
          onClick={() => dispatch('reset')}
        >
          Reset
        </button>
      </div>

      <div>
        <div className='p-4' id='example'>
          Count - {countTwo}
        </div>

        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={() => dispatchTwo('increment')}
        >
          Increment
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => dispatchTwo('decrement')}
        >
          Decrement
        </button>
        <button
          className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
          onClick={() => dispatchTwo('reset')}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
    `;
  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default function UseReducer3() {
  const ScrollDown = () => {
    window.scrollTo({ top: 850, behavior: 'smooth' });
  };
  return (
    <div className=' font-mono text-1xl justify-start'>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useReducer!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example simplify code with multiple useReducer for the same
        state and how it works with switch/dispatch methods!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-green-500 
          hover:bg-green-700 focus:outline-none '
          style={{cursor:'pointer'}}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div
        className='list-outside text-left text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <CounterThree />
      </div>
      <Component />
    </div>
  );
}
