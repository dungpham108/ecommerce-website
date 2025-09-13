import { useEffect, useState } from "react";
import { products } from "../assets/data";
import Item from "./Item";

const PopularProductsPage = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((product) => product.popular);
    setPopularProducts(data);
  }, []);
  return (
    <section className="w-full bg-white py-10 px-5 lg:px-20">
      <div className="pb-6 flex flex-row justify-between items-center">
        <h3 className="text-2xl font-semibold text-black">Popular Products</h3>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {popularProducts.map((product, index) => {
          return (
            <div key={index}>
              <Item product={product} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProductsPage;
