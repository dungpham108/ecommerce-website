import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi"; // ✅ thêm import icon

export default function DefaultLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={22} />
        </button>
      )}
    </>
  );
}
