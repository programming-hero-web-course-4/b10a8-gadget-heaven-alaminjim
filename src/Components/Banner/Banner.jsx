import Hero from "../Hero/Hero";

const Banner = () => {
  return (
    <div>
      <div className="w-[1152px] h-[550px] bg-[#9538E2] rounded-b-md relative">
        <h1 className="text-center text-white font-bold text-5xl pt-7">
          Upgrade Your Tech Accessorize with<br></br>Gadget Heaven Accessories
        </h1>
        <p className="text-center pt-4 text-sm text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices<br></br>to the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center items-center">
          <button className="btn mt-7 rounded-full">Shop Now</button>
        </div>
      </div>
      <div className="absolute top-12 mt-[360px]">
        <Hero></Hero>
      </div>
    </div>
  );
};

export default Banner;
