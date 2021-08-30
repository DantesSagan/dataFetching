import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import React from 'react';
import Counter from './counterUseMemo/Counter';

export default function UseMemo() {
  const ScrollDown = () => {
    window.scrollTo({ top: 870, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `
import React from 'react';
import Counter from './counterUseMemo/Counter';

export default function UseMemo() {
  const ScrollDown = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };

  return (
    <div className=' font-mono text-1xl justify-start'>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useState!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to use Data Fetching with useState to visualization
        on Loading and Error when something goes wrong
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
        <Counter />
      </div>
      <Component />
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
<Counter />
// with memoized CounterOne which delaying call and cashing it but not second CounterTwo 
// because second was cashed value off is Even function to display to CounterOne is ' Odd' || ' Even'
// Value never change for CounterOne there is no need to recompute this ' Odd' || ' Even' value
// React simply use cashed value from previous render 
// And where different in useCallBack && useMemo ?
// Different of this useCallBack cashes provided function instance itself where is useMemo invokes the provided function and cashes it's result 
// If you need to cash = useCallBack, if you need to cash result function = useMemo

import React, { useState, useMemo } from 'react';



export default function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

const resetCounters = () => {
    setCounterOne(0)
    setCounterTwo(0);
}

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div className='text-center p-4'>
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </div>
      <div className='text-center'>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={incrementOne}
        >
          Counter one - {counterOne}
        </button>
      </div>
      <div className='text-center'>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={incrementTwo}
        >
          Counter two - {counterTwo}
        </button>
      </div>
      <div className='text-center'>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={resetCounters}
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

  return (
    <div className=' font-mono text-1xl justify-start'>
      <h2 className='text-center text-4xl p-4'>
        This is a Data Fetching page with useMemo!
      </h2>
      <hr className='border-2 border-green-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example how to using useMemo with two buttons!
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
        <Counter />
      </div>
      <Component />
    </div>
  );
}
