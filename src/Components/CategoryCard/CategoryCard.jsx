import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

const CategoryCard = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category && category !== "all") {
      const singleProduct = [...data].filter(
        (item) => item.category === category
      );
      setProducts(singleProduct);
    } else {
      setProducts(data.slice(0, 8));
    }
  }, [data, category]);

  return (
    <div className="mt-14 ml-10">
      {products.length === 0 ? (
        <div className="ml-32 text-5xl">
          <h1 className="text-bold text-purple-600 text-center mt-12">
            404 NOT FOUND
          </h1>
          <p className="text-semibold text-purple-600 text-center mt-3.5">
            No Data Available In This Category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, idx) => (
            <Cards key={idx} product={product}></Cards>
          ))}
        </div>
      )}
      <div>
        <button
          onClick={() => navigate("/products")}
          className="p-3 w-[239px] h-16 outline-1 outline-purple-500 mt-6 rounded-full hover:bg-purple-600 hover:text-white"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
