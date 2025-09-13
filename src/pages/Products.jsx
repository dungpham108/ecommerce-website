import React, { useState, useEffect } from "react";
import { products as allProducts } from "../assets/data";
import Item from "../components/Item";
import { FiFilter, FiX, FiArrowUp } from "react-icons/fi";

const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "$0 - $100", min: 0, max: 100 },
  { label: "$100 - $300", min: 100, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
];

const Products = () => {
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    let temp = allProducts;

    if (category !== "All") {
      temp = temp.filter((p) => p.category === category);
    }

    temp = temp.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    setFilteredProducts(temp);
    setCurrentPage(1);
  }, [category, priceRange]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirst, indexOfLast);

  const handleReset = () => {
    setCategory("All");
    setPriceRange(priceRanges[0]);
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const SidebarContent = () => (
    <div className="w-64 bg-white p-4 lg:border-r shadow-sm h-full overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Category</h2>
      <ul className="space-y-2 mb-6">
        {categories.map((cat) => (
          <li key={cat}>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="radio"
                name="category"
                checked={category === cat}
                onChange={() => handleCategoryChange(cat)}
                className="text-red-500 focus:ring-red-500"
              />
              <span className="text-sm">{cat}</span>
            </label>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-bold mb-4">Price Range</h2>
      <ul className="space-y-2">
        {priceRanges.map((range) => (
          <li key={range.label}>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="radio"
                name="price"
                checked={priceRange.label === range.label}
                onChange={() => handlePriceChange(range)}
                className="text-red-500 focus:ring-red-500"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          </li>
        ))}
      </ul>

      <button
        onClick={handleReset}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
      >
        Reset Filter
      </button>
    </div>
  );

  return (
    <>
      <div className="py-10 px-4 md:px-8 lg:px-20 flex flex-col lg:flex-row gap-8 relative">
        <div className="flex justify-end lg:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50"
          >
            <FiFilter /> Filter
          </button>
        </div>

        <aside className="hidden lg:block sticky top-4 h-fit">
          <SidebarContent />
        </aside>

        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className={`bg-white w-72 h-full relative transform transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 text-2xl hover:text-red-500"
              >
                <FiX />
              </button>
              <SidebarContent />
            </div>

            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          </div>
        )}

        <main className="flex-1">
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentItems.map((product) => (
                <Item key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No products found.
            </p>
          )}

          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center items-center mt-6 gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-red-100"
                }`}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-red-500 text-white"
                      : "hover:bg-red-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-red-100"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Products;
