import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    async function fetchImages(getUrl) {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if (data) {
          setImages(data);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (!url !== '') fetchImages(url);
  }, [url, limit, page]);

  return (
    <div className="container">
      {loading && <p>Loading data, please wait...</p>}
      {error && <p>Oops! Something went wrong</p>}

      {images && images.length ? (
        <div className="images-container">
          <BsArrowLeftCircleFill
            onClick={() => handlePrevious()}
            className="arrow arrow-left"
          />

          <ul className="images-list">
            {images.map((imageItem, index) => (
              <li key={imageItem.id}>
                <img
                  alt={imageItem.download_url}
                  src={imageItem.download_url}
                  className={
                    currentSlide === index
                      ? 'current-image'
                      : 'current-image hide-current-image'
                  }
                />
              </li>
            ))}
          </ul>
          <BsArrowRightCircleFill
            onClick={() => handleNext()}
            className="arrow arrow-right"
          />
          <span className="circle-indicators">
            {images && images.length
              ? images.map((_, index) => (
                  <button
                    onClick={() => setCurrentSlide(index)}
                    key={index}
                    className={
                      currentSlide === index
                        ? 'current-indicator'
                        : 'current-indicator inactive-indicator'
                    }
                  ></button>
                ))
              : null}
          </span>
        </div>
      ) : null}
    </div>
  );
}
