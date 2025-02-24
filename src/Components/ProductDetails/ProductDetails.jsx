import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { addToCart, addToWish } from "../Utilize";

const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState([]);
  const id = parseInt(product_id);
  useEffect(() => {
    const findSingleData = data.find((products) => products.product_id === id);
    setProduct(findSingleData);
  }, [data, id]);

  const {
    product_image,
    product_name,
    price,
    description,
    specification,
    rating,
    availability,
  } = product;

  const handelCart = (id) => {
    addToCart(id);
  };

  const handelWish = (id) => {
    addToWish(id);
  };

  return (
    <div>
      <div className="w-[1152px] h-[450px] bg-[#9538E2] rounded-lg relative">
        <h1 className="text-center pt-12 text-5xl font-bold text-white">
          Product Details
        </h1>
        <p className="text-center pt-7 text-amber-50 font-semibold">
          The product detail page is a crucial element to your eCommerce
          strategy because it is where the fate of a potential sale<br></br>
          lives. The product detail page should be carefully designed so that a
          hierarchy<br></br>of information is presented in an intuitive manner.
        </p>
      </div>
      <div>
        <div className="absolute top-3.5 mt-80 ml-[75px]">
          <div className="hero bg-base-200 w-[1000px] h-[525px] rounded-lg ">
            <div className="flex flex-col lg:flex-row">
              <img
                src={product_image}
                className="w-[524px] h-[460px] mr-7  rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-4xl pl-4 font-bold">{product_name}</h1>
                <p className="pl-4 pt-2 text-lg font-bold">Price: ${price}</p>
                <div
                  className={`ml-4 mt-2 w-[98px] h-[32px] font-bold rounded-full ${
                    availability
                      ? " text-green-600 bg-[#2f9c0833] outline-1 pt-0.5 pl-4 outline-green-600"
                      : "text-red-600 bg-red-300 outline-1 pt-0.5 pl-3 outline-red-600"
                  }`}
                >
                  {availability ? "In Stock" : "Stock Out"}
                </div>
                <p className="ml-4 mt-2 font-semibold text-lg text-[#09080f81]">
                  {description}
                </p>
                <div className="ml-4 mt-2">
                  <h1 className="font-semibold text-lg space-y-1">
                    Specification:
                  </h1>
                  <ol className=" text-[#09080fa9] font-bold space-y-1">
                    {specification &&
                      Object.keys(specification).map((s) => (
                        <li key={specification[s]}>
                          {s} : {specification[s]}
                        </li>
                      ))}
                  </ol>
                </div>
                <hr className="mt-7 text-[#09080f11] "></hr>
                <p className="ml-4 mt-3 font-bold">Rating</p>
                <div className="flex ml-4 mt-2">
                  <div className="rating mt-1">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>{" "}
                  <p className="text-lg w-[50px] h-[30px] bg-[#09080f11] rounded-full pl-3 ml-3 mb-1">
                    {rating}
                  </p>
                </div>{" "}
                <div className="mt-4 flex space-x-3.5">
                  <button
                    onClick={() => handelCart(product_id)}
                    className="btn border-[1px] border-purple-600 hover:bg-[#9538E2] hover:text-white rounded-full w-[160px] font-bold"
                  >
                    Add To Cart
                    <TiShoppingCart className="w-5 h-5"></TiShoppingCart>
                  </button>
                  <p
                    onClick={() => handelWish(product_id)}
                    className="w-10 h-10 border-[1px] rounded-full"
                  >
                    <FaRegHeart className="w-5 h-5 mt-2.5 ml-2 "></FaRegHeart>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
