import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import CounterTwo from './reducer/CounterTwo';

const Component = () => {
  const codeString = `
import React from 'react';
import CounterTwo from './reducer/counterTwo';

    export default function UseReducer() {
  return (
    <div>
      <CounterTwo />
    </div>
  );
}
.
.
.
// gets component(CounterTwo) from reducer
=>
.
.
.
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
      return { ...state, firstCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, firstCounter: state.secondCounter - action.value };
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
      <div className='p-4' id='example'>
        First Counter - {count.firstCounter}
        Second Counter - {count.secondCounter}
      </div>

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

      <div>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={() => dispatch({ type: 'increment2', value: 1 })}
        >
          Increment Counter 2
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={() => dispatch({ type: 'decrement2', value: 1 })}
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

    `;
  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default function UseReducer2() {
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
        This is example more complex code with useReducer and how it works with
        switch/dispatch methods!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <a
          onClick={ScrollDown}
          href='#example'
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-green-500 
          hover:bg-green-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </a>{' '}
        below how it code works!
      </h2>
      <div
        className='list-outside text-left text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <CounterTwo />
      </div>
      <Component id={'example'} />
    </div>
  );
}
