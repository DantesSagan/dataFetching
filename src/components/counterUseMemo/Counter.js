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
