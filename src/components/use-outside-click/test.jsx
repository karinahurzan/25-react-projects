import { useRef, useState } from 'react';
import useOutsideClick from '.';

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is random contant</h1>
          <p>
            Please, click outside of this to close this. It won't close if you
            click inside of this contsnt
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
}
