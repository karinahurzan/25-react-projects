import { useRef } from 'react';

export default function ScrollToSction() {
  const ref = useRef();

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }

  const data = [
    {
      label: 'First Card',
      style: {
        width: '100%',
        height: '600px',
        background: '#B0827B',
      },
    },
    {
      label: 'Second Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'grey',
      },
    },
    {
      label: 'Third Card',
      style: {
        width: '100%',
        height: '600px',
        background: '#7D6E46',
      },
    },
    {
      label: 'Fourth Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'beige',
      },
    },
    {
      label: 'Fifth Card',
      style: {
        width: '100%',
        height: '600px',
        background: '#514759',
      },
    },
  ];

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
