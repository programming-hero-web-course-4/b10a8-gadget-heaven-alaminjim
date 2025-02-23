//  cart

import toast from "react-hot-toast";

// get cart
const getToCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const cartInt = JSON.parse(cart);
    return cartInt;
  } else {
    return [];
  }
};
// add to cart

const addToCart = (product_id) => {
  const cart = getToCart();

  if (cart.includes(product_id)) {
    toast.error(" AlReady Added");
  } else {
    cart.push(product_id);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Successfully Added cart");
  }
};

// wish List

const getToWish = () => {
  const wish = localStorage.getItem("wish");
  if (wish) {
    const wishInt = JSON.parse(wish);
    return wishInt;
  } else {
    return [];
  }
};

const addToWish = (product_id) => {
  const wish = getToWish();
  if (wish.includes(product_id)) {
    toast.error(" AlReady Added");
  } else {
    wish.push(product_id);
    localStorage.setItem("wish", JSON.stringify(wish));
    toast.success("Successfully Added wish");
  }
};

export { addToCart, getToCart, addToWish, getToWish };
