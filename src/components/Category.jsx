import cat1 from "../assets/Image 21.png";
import cat2 from "../assets/Image 24.png";
import cat3 from "../assets/Image 22.png";
import cat4 from "../assets/Image 19.png";
import cat5 from "../assets/Image 6.png";
import cat6 from "../assets/Image 9.png";

const categories = [
  {
    id: 1,
    name: "iPhone",
    image: cat1,
  },
  {
    id: 2,
    name: "Mini Speaker",
    image: cat2,
  },
  {
    id: 3,
    name: "iPad",
    image: cat3,
  },
  {
    id: 4,
    name: "Headphones",
    image: cat4,
  },
  {
    id: 5,
    name: "Laptop",
    image: cat5,
  },
  {
    id: 6,
    name: "AirPods",
    image: cat6,
  },
];

const Category = () => {

  return (
    <div className="w-full bg-gray-100 px-5 lg:px-20 pb-20">
      <div className="py-8 text-center lg:text-left">
        <h3 className="text-2xl font-semibold text-black">
          Trending Categories
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay="100"
            className="flex flex-col items-center bg-white cursor-pointer rounded-lg shadow-sm hover:shadow-md transition p-6"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-contain"
            />
            <h1 className="mt-4 text-black text-lg font-semibold hover:text-red-400 transition">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
