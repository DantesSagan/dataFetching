import React from 'react';

export default React.memo(function Title() {
  console.log('Rendering Title');
  return <h2 className="p-4 text-mono text-2xl ">useCallback Hook</h2>;
});
