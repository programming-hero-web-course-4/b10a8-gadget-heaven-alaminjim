import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const Layouts = () => {
  return (
    <div className="max-w-6xl mx-auto my-6">
      <Toaster />
      <NavBar></NavBar>

      <Outlet></Outlet>

      <div className="mt-[320px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layouts;
