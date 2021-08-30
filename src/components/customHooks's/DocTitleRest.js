import React, { useState } from 'react';
import UseDocumentTitle from './Hooks/UseDocumentTitle';

export default function DocTitleReset() {
  const [count, setCount] = useState(0);
  UseDocumentTitle(count);
  const resetCount = ()=>{
      setCount(0)
  }
  return (
    <div className='text-center'>
      <button
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        onClick={() => resetCount(count)}
      >
        Reset
      </button>
    </div>
  );
}
