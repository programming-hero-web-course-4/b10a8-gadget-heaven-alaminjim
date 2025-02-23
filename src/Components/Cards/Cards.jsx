import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const {
    product_image,
    product_name,
    category,
    price,
    rating,
    availability,
    product_id,
  } = product;

  return (
    <div>
      <div className="card bg-base-100 w-72 shadow-xl">
        <figure className="p-5">
          <img
            className="h-[191px] rounded-md"
            src={product_image}
            alt={product_name}
          />
        </figure>
        <div>
          <h2 className="font-bold pl-5 text-xl">{product_name}</h2>
          <p className="pl-5 pt-1.5 text-lg font-semibold">
            <a className="font-semibold">Category:</a> {category}
          </p>
          <div className="flex justify-between mt-1.5 text-[#09080fa2] font-bold">
            <p className="ml-5">Price: {price}</p>
            <p className="mr-2.5">Rating: {rating}</p>
          </div>
          <p className="ml-5 pt-1.5 text-[#09080fa2]  font-bold">
            Available: {availability ? "In Stock" : "Out of Stock"}
          </p>
          <div className="card-actions justify-end mr-2.5 mb-5 mt-2.5">
            <Link to={`/product/${product_id}`}>
              <button className="btn outline-2 outline-offset-0  outline-purple-600 hover:bg-[#9538E2]">
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
