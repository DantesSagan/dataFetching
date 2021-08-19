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
      <div className='font-mono text-1xl justify-start'>
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
