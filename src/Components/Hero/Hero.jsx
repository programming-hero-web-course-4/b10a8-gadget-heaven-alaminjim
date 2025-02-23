import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div>
      <div>
        <img
          className="w-[850px] h-[450px] ml-[145px] rounded-lg border-8 border-white"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
