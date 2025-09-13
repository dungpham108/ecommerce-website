import watch from "../assets/Image 1.png";
import laptop from "../assets/laptop.png";
import phone from "../assets/phone.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ImageList = [
  {
    id: 1,
    img: watch,
    title: "Sale 50% Off Smart Watch",
    description:
      "Discover the latest in smart watch technology with our range of features and styles.",
  },
  {
    id: 2,
    img: laptop,
    title: "Sale 50% Off Laptops",
    description:
      "Upgrade your tech with our high-performance laptops at unbeatable prices.",
  },
  {
    id: 3,
    img: phone,
    title: "Sale 50% Off Smartphones",
    description:
      "Stay connected with the latest smartphones featuring cutting-edge technology.",
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false,
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    Aos.refresh();
  }, []);
  return (
    <Slider className="w-full" {...settings}>
      {ImageList.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-20">
              <div className="w-full md:w-1/2 space-y-8">
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold leading-tight"
                >
                  {item.title}
                </h1>

                <p
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  className="text-gray-600 text-lg md:text-xl max-w-xl"
                >
                  {item.description}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
