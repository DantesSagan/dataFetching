import React, { useRef, useEffect } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focus the input element
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type='text'></input>
    </div>
  );
}
