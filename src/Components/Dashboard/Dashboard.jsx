import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { getToCart, getToWish } from "../Utilize";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const Dashboard = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [cartProduct, setCartProduct] = useState([]);
  const [wish, setWish] = useState([]);
  const [isModal, setModal] = useState(false);

  // Purchase

  const handelPurchase = () => {
    setModal(true);
  };

  // close modal

  const modalClose = () => {
    setCartProduct([]);
    setModal(false);
    navigate("/");
  };

  // btn toggle
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active",
  });

  const handelToggle = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "wish",
      });
    }
  };

  useEffect(() => {
    const cart = getToCart();
    const cartInt = cart.map((id) => parseInt(id));

    const cartProduct = [...data].filter((product) =>
      cartInt.includes(product.product_id)
    );
    setCartProduct(cartProduct);
  }, [data]);

  useEffect(() => {
    const wish = getToWish();
    const wishInt = wish.map((id) => parseInt(id));

    const wishProduct = [...data].filter((product) =>
      wishInt.includes(product.product_id)
    );
    setWish(wishProduct);
  }, [data]);

  // sort by price

  const handelSortBy = (sort) => {
    if (sort === "price") {
      const sortBy = [...cartProduct].sort((a, b) => b.price - a.price);
      setCartProduct(sortBy);
    }
  };

  const totalPrice = cartProduct.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-5">
      <div className="w-[1152px] h-[350px] bg-[#9538E2] rounded-lg">
        <h1 className="text-center pt-12 text-5xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-center pt-7 font-semibold text-amber-50">
          Dashboards offers a holistic view of the entire business as it gives
          the manager a birds eye view into the performance of sales, data
          <br></br>
          inventory, web traffic, social media analytics and other associated
          data that is visually presented on a single dashboard. <br></br>
          Dashboards lead to better management of marketing/financial strategies
        </p>
        <div className="flex justify-center items-center space-x-5 mt-10">
          <button
            className={`w-[190px] h-[50px] outline-1 outline-white font-bold text-l rounded-full ${
              isActive.cart ? "bg-white text-purple-800" : ""
            }`}
            onClick={() => handelToggle("cart")}
          >
            Cart
          </button>
          <button
            className={`w-[190px] h-[50px] outline-1 outline-white font-bold text-l rounded-full ${
              isActive.cart ? "" : "bg-white text-purple-800"
            }`}
            onClick={() => handelToggle("wish")}
          >
            Wish List
          </button>
        </div>
      </div>

      {/* Cart UI Section (Show Only Once) */}
      {isActive.cart && cartProduct.length > 0 && (
        <div>
          <h1 className="font-bold text-xl mt-5">Cart</h1>
          <div className="flex justify-end space-x-4">
            <p className="font-bold text-xl mr-20 mt-3">
              Total Cost: ${totalPrice}
            </p>
            <button
              onClick={() => handelSortBy("price")}
              className="w-[190px] h-12 outline-1 outline-purple-600 rounded-full font-bold hover:bg-purple-600 hover:text-white"
            >
              Sort By Price
            </button>
            <button
              onClick={handelPurchase}
              className="w-[137px] h-12 rounded-full bg-purple-600 text-white font-semibold"
            >
              Purchase
            </button>
          </div>
        </div>
      )}

      {/* Wish List UI Section (Show Only Once) */}
      {!isActive.cart && wish.length > 0 && (
        <div>
          <h1 className="font-bold text-xl mt-5">Wish List</h1>
        </div>
      )}

      {/* Render Cart or Wish List */}
      {isActive.cart
        ? cartProduct.map((product) => (
            <Cart key={product.id} product={product} />
          ))
        : wish.map((product) => (
            <WishList key={product.id} product={product} />
          ))}

      {/* modal */}
      {isModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-purple-500 text-center font-bold">
              Purchase Successful!
            </h2>
            <hr className="mt-2 text-[#09080f18]"></hr>
            <p className="text-center font-semibold pt-2">
              Thanks For Purchasing!
            </p>
            <p className="text-center pt-1.5 font-bold">
              Total Cost: ${totalPrice}
            </p>
            <div className="flex justify-center items-center">
              <button
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded"
                onClick={modalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
