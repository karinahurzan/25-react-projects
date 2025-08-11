import useFetch from '.';

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    'https://dummyjson.com/products',
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h2>The answer is pending</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {data && data.products && data.products.length
        ? data.products.map(product => (
            <div key={product.key}>{product.title}</div>
          ))
        : null}
    </div>
  );
}
