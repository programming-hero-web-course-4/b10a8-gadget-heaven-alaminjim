const Footer = () => {
  return (
    <div className="w-full h-[370px] bg-base-200">
      <h1 className="text-center pt-12 text-3xl font-bold">Gadget Heaven</h1>
      <p className="text-center text-sm pt-2 font-semibold text-[#09080f8e]">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="mt-9 w-[930px] ml-28 text-[#09080f1f]"></hr>
      <div className="flex justify-evenly mt-9">
        <nav>
          <h6 className="font-bold mb-2.5">Services</h6>
          <a className="space-y-1.5 text-[#09080f8e] font-semibold">
            <p>Product </p>
            <p> Tracking Shipping</p>
            <p>Delivery Returns</p>
            <p>Support Order</p>
          </a>
        </nav>
        <nav>
          <h6 className="font-bold mb-2.5 ">Company</h6>
          <a className="space-y-1.5 text-[#09080f8e] font-semibold">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </a>
        </nav>
        <nav>
          <h6 className="font-bold mb-2.5">Legal</h6>
          <a className="space-y-1.5 text-[#09080f8e] font-semibold">
            <p>Terms of Service</p>
            <p> Privacy Policy</p>
            <p>Cookie Policy</p>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
