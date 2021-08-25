import React, { useState, useEffect, useRef } from 'react';

export default function HookTimer() {
  const [timer, setTimer] = useState(0);

  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div>
      Hook Timer - {timer}
      <button
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        ref={ref}
        onClick={() => clearInterval(ref.current)}
      >
        Clear Hook Timer
      </button>
      <button
        className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
        onClick={() =>
          (ref.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
          }, 1000))
        }
      >
        Resume
      </button>
    </div>
  );
}
