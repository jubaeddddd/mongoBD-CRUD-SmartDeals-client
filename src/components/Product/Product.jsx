import { NavLink } from "react-router";

const Product = ({ product }) => {
  const { _id,title, price_min, price_max, image } = product;

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price_min} - {price_max}</p>
        <div className="card-actions">
          <NavLink to={`/productDetails/${_id}`} className="btn text-white bg-violet-600 w-full">View Details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
