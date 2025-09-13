import banner1 from "../assets/Image 7.png";
import banner2 from "../assets/Image 8.png";

const Banner = () => {
  return (
    <div className="w-full bg-white px-5 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-sm"
        >
          <span className="text-sm font-poppins text-gray-500 uppercase tracking-wide mb-2">
            Security Smart Camera
          </span>
          <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
            Just Starting at $850
          </h3>
          <button className="mb-2 bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-full text-lg transition">
            Shop Now
          </button>
          <img
            src={banner1}
            alt="Smart Camera"
            className="w-[298px] h-[248px] object-cover"
          />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-sm"
        >
          <span className="text-sm font-poppins text-gray-500 uppercase tracking-wide mb-2">
            Entertainment & Games
          </span>
          <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">
            Just Starting at $450
          </h3>
          <button className=" bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-full text-lg transition">
            Shop Now
          </button>
          <img
            src={banner2}
            alt="Game Controller"
            className="w-[298px] h-[248px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
