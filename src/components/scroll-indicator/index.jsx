import { useState, useEffect } from 'react';
import './scroll.css';

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    async function fetchData(getUrl) {
      try {
        setLoading(true);
        const response = await fetch(getUrl);
        const data = await response.json();

        if (data && data.products && data.products.length > 0) {
          setData(data.products);
          setLoading(false);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }

    fetchData(url);
  }, [url]);

  useEffect(() => {
    function handleScrollPercentage() {
      const howMuchScrolled =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollPercentage((howMuchScrolled / height) * 100);
    }

    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', handleScrollPercentage);
    };
  }, [scrollPercentage]);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Costum Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container ">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0 ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
