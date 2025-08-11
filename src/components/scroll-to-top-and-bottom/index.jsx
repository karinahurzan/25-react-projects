import { useRef } from 'react';
import useFetch from '../use-fetch';

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    'https://dummyjson.com/products',
    {}
  );

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  if (error) {
    return <h1>Something went wrong ! Please, try again ...</h1>;
  }

  if (pending) {
    return <h1>Response is pending ...</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul style={{ listStyle: 'none' }}>
        {data && data.products && data.products.length
          ? data.products.map(item => <li key={item.key}>{item.title}</li>)
          : null}
      </ul>
      <ul style={{ listStyle: 'none' }}>
        {data && data.products && data.products.length
          ? data.products.map(item => <li key={item.key}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
