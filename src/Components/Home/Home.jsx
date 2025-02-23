import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";

const Home = () => {
  const category = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="relative top-12 pt-[260px]">
        <Hero></Hero>
      </div>
      <h1 className="text-5xl text-center font-bold mt-28 text-purple-700">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex">
        <div className="mt-14">
          {category.map((categories, idx) => (
            <Link key={idx} to={`/category/${categories.category}`}>
              <div
                className="w-[230px] h-[90px] bg-[#09080f10]"
                key={categories.category}
              >
                <button className=" mt-5 ml-3.5 w-[192px] h-[52px] btn rounded-full">
                  {categories.category}
                </button>
              </div>
            </Link>
          ))}
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
