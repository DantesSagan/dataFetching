  import React from 'react';

export default React.memo(function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div className="p-4">
      {text} - {count}
    </div>
  );
});
