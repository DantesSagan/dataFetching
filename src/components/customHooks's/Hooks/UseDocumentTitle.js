import { useEffect } from 'react';

export default function UseDocumentTitle(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);
}
