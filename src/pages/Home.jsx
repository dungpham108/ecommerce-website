import Hero from "../components/Hero";
import Category from "../components/Category";
import Banner from "../components/Banner";
import SaleBanner from "../components/SaleBanner";
import PopularProductsPage from "../components/PopularProductsPage";
import BlogGrid from "../components/BlogGrid";
import Brands from "../components/Brands";
import ProductsGrid from "../components/ProductsGrid";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Category />
      <Banner />
      <ProductsGrid />
      <SaleBanner />
      <PopularProductsPage />
      <BlogGrid />
      <Brands />
    </div>
  );
};

export default Home;
