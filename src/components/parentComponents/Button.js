import React from 'react';

export default React.memo(function Button({ handleClick, children }) {
  console.log('Rendering', children);
  return (
    <button
      className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
      onClick={handleClick}
    >
      {children}
    </button>
  );
});
