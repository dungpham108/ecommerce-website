import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import Item from "./Item";
import { useEffect } from "react";
import { products } from "../assets/data";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsGrid = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <section className="w-full bg-white px-5 lg:px-20">
      <div className="pb-6 flex flex-row justify-between items-center">
        <h3 className="text-2xl font-semibold text-black">Latest Products</h3>
        <button className="text-xp font-semibold flex justify-center items-center gap-2">
          View all products <FaArrowRight className="text-red-500" />
        </button>
      </div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          666: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="h-[399px]"
      >
        {productsData.products.slice(0, 7).map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <Item product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ProductsGrid;
