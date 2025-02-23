import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layouts = () => {
  return (
    <div className="max-w-6xl mx-auto my-6">
      <NavBar></NavBar>

      <Outlet></Outlet>

      <div className="mt-[190px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layouts;
