import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Item = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/3] rounded-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4 space-y-[6px]">
        <p className="text-xs text-gray-400 uppercase">{product.category}</p>

        <h4 className="font-medium text-gray-800 line-clamp-1">
          {product.name}
        </h4>

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-black">${product.price}</p>
        </div>

        <button
          className="mt-2 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 rounded-3xl transition"
          onClick={() => handleAddToCart(product)}
        >
          <FaShoppingCart className="text-white" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
