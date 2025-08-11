import { useEffect, useState } from 'react';
import './styles.css';

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const result = await response.json();

        if (result && result.products && result.products.length) {
          setProducts(result.products);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisabledButton(true);
  }, [products]);

  return (
    <div className="load-more-container container">
      {loading && <p>Loading data, please wait...</p>}
      {error && <p>Oops! Something went wrong</p>}

      <div>
        {products && products.length ? (
          <ul className="product-container">
            {products.map(({ id, thumbnail, title }) => (
              <li className="product" key={id}>
                <img src={thumbnail} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="button-container">
        <button
          disabled={disabledButton}
          className="load-more-button"
          onClick={() => setCount(count + 1)}
        >
          Load More
        </button>
        {disabledButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
