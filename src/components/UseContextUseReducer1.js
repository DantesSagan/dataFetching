import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { useReducer, createContext } from 'react';
import ComponentA from './nestedComponents3/ComponentA';
import ComponentB from './nestedComponents3/ComponentB';
import ComponentC from './nestedComponents3/ComponentC';

export const CountContext = createContext();

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
const Component = () => {
  const codeString = `
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React, { useReducer } from 'react';
import ComponentA from './nestedComponents3/ComponentA';
import ComponentB from './nestedComponents3/ComponentB';
import ComponentC from './nestedComponents3/ComponentC';

export const CountContext = React.createContext();

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
export default function UseContextUseReducer1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const ScrollDown = () => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className='font-mono text-1xl justify-center'>
        <h2 className='text-center text-4xl p-4'>
          This is a page with how to concatenate useContext and useReducer!
        </h2>
        <hr className='border-2 border-green-700' />
        <h2 className='text-center text-3xl p-4'>
          This is example using useContext and useReducer for showing how works
          both hooks method in each nested components!
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
            style={{ cursor: 'pointer' }}
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
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
        <Component />
      </div>
    </CountContext.Provider>
  );
}
.
.
.
And we get components from ComponentA, ComponentB,ComponentC.
And it's work like taking nested components like in previous example
.
.
.
=>
.
.
.
ComponentA
import React, { useContext } from 'react';
import { CountContext } from '../UseContextUseReducer1';

export default function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component A - {countContext.countState}
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
.
.
.
=>
.
.
.
ComponentB
import React from 'react';
import ComponentD from './ComponentD';

export default function ComponentB() {
  return (
    <div>
      <ComponentD />
    </div>
  );
}
.
.
.
=>
.
.
.
ComponentD
.
.
import React, { useContext } from 'react';
import { CountContext } from '../UseContextUseReducer1';

export default function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component D - {countContext.countState}
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
.
.
.
=>
.
.
.
ComponentC
.
.
import React from 'react';
import ComponentE from './ComponentE';

export default function ComponentC() {
  return (
    <div>
      <ComponentE />
    </div>
  );
}
.
.
.
=>
.
.
.
ComponentE
.
.
import React from 'react';
import ComponentF from './ComponentF';

export default function ComponentE() {
  return (
    <div>
      <ComponentF />
    </div>
  );
}
.
.
.
=>
.
.
.
ComponentF
.
.
import React, { useContext } from 'react';
import { CountContext } from '../UseContextUseReducer1';

export default function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component F - {countContext.countState}
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


    `;
  return (
    <SyntaxHighlighter language='javascript' style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default function UseContextUseReducer1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const ScrollDown = () => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className='font-mono text-1xl text-center'>
        <h2 className='text-center text-4xl p-4'>
          This is a page with how to concatenate useContext and useReducer!
        </h2>
        <hr className='border-2 border-green-700' />
        <h2 className='text-center text-3xl p-4'>
          This is example using useContext and useReducer for showing how works
          both hooks method in each nested components!
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
            style={{ cursor: 'pointer' }}
          >
            example
          </i>{' '}
          below how it code works!
        </h2>

        <div
          className='list-outside text-center text-2xl rounded-lg p-8 border-4 border-green-700 shadow-inner'
          style={{
            color: 'white',
            backgroundColor: '#4d4033',
          }}
        >
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
        <Component />
      </div>
    </CountContext.Provider>
  );
}
