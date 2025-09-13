import saleBanner from "../assets/Image 28.png";

const SaleBanner = () => {
  return (
    <div className="bg-bgHero px-4 sm:px-8 lg:px-20 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            🔥 Limited Time Offer!
          </h2>
          <p className="text-gray-700 text-lg lg:text-2xl mb-6">
            Get <span className="font-semibold text-red-500">20% off</span> on
            all products. <br />
            Use code: <span className="font-bold text-red-600">SALE20</span>
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-base font-medium transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="lg:w-1/2 w-full">
          <img
            src={saleBanner}
            alt="Sale Banner"
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
