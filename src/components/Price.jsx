import React from "react";

const prices = ["All", "Under $50", "$50 - $100", "$100 - $200", "Above $200"];

const Price = ({ selected, onChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
        Price
      </h3>
      <div className="flex flex-col gap-3">
        {prices.map((price) => (
          <label
            key={price}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="radio"
              name="price"
              className="hidden peer"
              checked={selected === price}
              onChange={() => onChange(price)}
            />
            <span className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-purple-600 peer-checked:bg-purple-600 transition-all duration-200">
              <svg
                className="w-2 h-2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </span>
            <span className="text-gray-700 group-hover:text-purple-600 transition-colors">
              {price}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Price;
