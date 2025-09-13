import React from "react";
import brand1 from "../assets/brands/client1.png";
import brand2 from "../assets/brands/client2.png";
import brand3 from "../assets/brands/client3.png";
import brand4 from "../assets/brands/client4.png";
import brand5 from "../assets/brands/client5.png";
import brand6 from "../assets/brands/client6.png";

const Brands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <section className="bg-black py-8 px-4 lg:px-20">
      <div className="grid grid-cols-6 lg:gap-6 gap-4 items-center justify-items-center">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="w-28 h-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;
