const Cart = ({ product }) => {
  const { product_name, product_image, price, description, category } = product;
  return (
    <div>
      <h1 className="font-bold text-xl mt-5">Cart</h1>
      <div className="flex  justify-end space-x-4">
        <p className="font-bold text-xl mr-28 mt-3">Total Cost: </p>
        <button className="w-[190px] h-12 outline-1 outline-purple-600 rounded-full font-bold hover:bg-purple-600 hover:text-white">
          Sort By Price
        </button>
        <button className="w-[137px] h-12 rounded-full bg-purple-600 text-white font-semibold">
          Purchase
        </button>
      </div>

      <div className="mt-14">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="p-6">
            <img
              className="w-[144px] h-[134px] rounded-md"
              src={product_image}
              alt={product_name}
            />
          </figure>
          <div>
            <h2 className="pt-4 text-xl font-bold">{product_name}</h2>
            <p className="pt-1.5 text-xl font-semibold text-[#09080f8c]">
              {description}
            </p>
            <p className="pt-1.5 font-bold">Category: {category}</p>
            <p className="pt-2.5 text-xl font-bold">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
