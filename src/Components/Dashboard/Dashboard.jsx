import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { getToCart, getToWish } from "../Utilize";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const Dashboard = () => {
  const data = useLoaderData();
  const [cartProduct, setCartProduct] = useState([]);
  const [wish, setWish] = useState([]);

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
        <div className="flex justify-center items-center space-x-5  mt-10">
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
      {isActive.cart
        ? cartProduct.map((product) => (
            <Cart key={product.id} product={product}></Cart>
          ))
        : wish.map((product) => (
            <WishList key={product.id} product={product}></WishList>
          ))}
    </div>
  );
};

export default Dashboard;
