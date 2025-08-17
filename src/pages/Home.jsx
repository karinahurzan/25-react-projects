import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchListOfProducts() {
      setLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data);

      if (data) {
        setLoading(false);

        setProducts(data);
      }
    }

    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#787873", "#303027", "#A8A8A3", "#1A1A18", "#7A7A7A"]}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((item) => (
                <ProductTile key={item.id} product={item} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
