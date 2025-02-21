import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div>
      <div>
        <img
          className="w-[950px] h-[550px] ml-[98px] rounded-lg border-8 border-white"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
