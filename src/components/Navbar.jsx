import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      <nav className="bg-gray-50 shadow-sm">
        <div className="px-4 lg:px-20 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-poppins text-gray-900">
            .Shop<span className="text-purple-700 underline">D</span>
          </h1>

          <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800 uppercase tracking-wide">
            <li>
              <Link to="/" className="hover:text-purple-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-purple-700">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-purple-700">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-700">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4 text-gray-800 text-xl relative">
            <button>
              <FaSearch />
            </button>
            <Link to="/cart" className="relative">
              <FaShoppingCart />
              {products.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {products.length}
                </span>
              )}
            </Link>
            <Link to="/login">
              <FaUser />
            </Link>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md absolute w-full z-40">
            <ul className="flex flex-col items-center py-6 gap-6 text-sm font-semibold text-gray-800 uppercase tracking-wide">
              <li>
                <Link to="/" className="hover:text-purple-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-700">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-purple-700">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-purple-700">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
