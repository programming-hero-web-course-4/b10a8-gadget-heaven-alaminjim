import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

const Products = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="w-[1152px] h-[250px] bg-[#9538E2] rounded-lg">
        <h1 className="text-center pt-12 text-5xl font-bold text-white">
          All Products Are Here
        </h1>
        <p className="text-center pt-7 text-amber-50">
          You Can See All Products And Details.Got it! I will make sure to
          provide all the <br></br>required products whenever needed
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 mt-10 ml-20">
        {data.map((product, idx) => (
          <Cards key={idx} product={product}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Products;
