import { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  return (
    <div className="mt-10">
      <h3 className="text-center text-4xl font-bold">Recent <span className="text-violet-600">Products</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center
      mt-20">
        {products.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
