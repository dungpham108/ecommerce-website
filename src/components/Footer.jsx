import { Link } from "react-router-dom";
import visa from "../assets/visa-card.svg";
import mastercard from "../assets/master-card.svg";
import paypal from "../assets/paypal.svg";
import googlePlay from "../assets/Image 29.png";
import appStore from "../assets/Image 30.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 lg:px-20 pt-12 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>ShopD</p>
          <p>No, 12345 Freedom, HaNoi</p>
          <p className="text-red-500">Hanoi City</p>
          <p className="mt-1">+92-315 6784 322</p>
          <p className="mt-1">demo@exampledemo.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Radeem Voucher
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Policies & Rules
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
          <p className="text-sm mb-3">
            Download our App & get extra 20% Discount on your first Order...!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <img src={googlePlay} alt="Google Play" className="w-32" />
            <img src={appStore} alt="App Store" className="w-32" />
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p className="flex items-center gap-1">
          <span className="text-xl">⚡</span>
          Copyright © <span className="font-medium">ShopD</span> | Built with
          Drou by ShopD.
        </p>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <img src={visa} alt="Visa" className="h-6" />
          <img src={mastercard} alt="MasterCard" className="h-6" />
          <img src={paypal} alt="PayPal" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
