import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layouts = () => {
  return (
    <div className="max-w-6xl mx-auto my-6">
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-282px)] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
