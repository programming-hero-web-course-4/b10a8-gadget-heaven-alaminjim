const Cart = ({ product }) => {
  const {
    product_name,
    product_image,
    price,
    description,
    category,
    product_id,
  } = product;
  return (
    <div>
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
