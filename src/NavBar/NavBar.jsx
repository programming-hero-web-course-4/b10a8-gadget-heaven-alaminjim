import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full h-[590px] bg-[#9538E2] rounded-lg">
      <div className="pt-4 flex justify-around">
        <a>
          <h1 className="text-white font-bold text-lg">Gadget_Heaven</h1>
        </a>
        <a className="space-x-10 text-white font-semibold">
          <NavLink>Home</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Statistics</NavLink>
          <NavLink>Dashboard</NavLink>
        </a>
        <a className="space-x-4">
          <button className="w-8 h-8 bg-amber-50 rounded-full">
            <TiShoppingCart className=" m-2"></TiShoppingCart>
          </button>
          <button className="w-8 h-8 bg-amber-50 rounded-full">
            <FaRegHeart className="m-2"></FaRegHeart>
          </button>
        </a>
      </div>
      <div>
        <h1 className="text-center text-5xl font-bold text-white pt-8">
          Upgrade Your Tech Accessorize with<br></br>Gadget Heaven Accessories
        </h1>
        <p className="text-center pt-5 text-sm font-semibold text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices<br></br>to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="btn rounded-full text-purple-700 font-bold">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
