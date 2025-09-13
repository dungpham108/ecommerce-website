import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../assets/emptycart.png";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} from "../redux/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.products.reduce(
    (acc, product) => acc + product.price * product.totalQuantity,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleCheckout = () => {
    if (cart.products.length > 0) {
      cart.products.map((product) => ({
        product_id: product.id,
        buy_count: product.totalQuantity,
      }));

      window.scrollTo({ top: 0, behavior: "smooth" });

      toast.success("Purchase successful!");

      dispatch(resetCart());
    }
  };

  return (
    <div className="px-4 lg:px-20 py-8">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            SHOPPING CART
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-xl h-fit">
              <div className="hidden md:flex justify-between px-6 py-3 bg-gray-100 font-semibold text-sm uppercase border-b">
                <p className="w-1/3">Products</p>
                <div className="flex w-1/2 justify-between">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>

              {cart.products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b hover:bg-gray-50 transition ${
                    index === cart.products.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="flex items-center w-full gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain rounded-lg border"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full mt-4 md:mt-0">
                    <p className="font-semibold text-gray-800">
                      ${Number(product.price).toFixed(2)}
                    </p>
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => handleDecreaseQuantity(product.id)}
                        className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-4">{product.totalQuantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(product.id)}
                        className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ${(product.totalQuantity * product.price).toFixed(2)}
                    </p>
                    <button
                      className="text-red-500 hover:text-red-700 p-2"
                      onClick={() => handleRemove(product.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-xl p-6 h-fit">
              <h4 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-4">
                Order Summary
              </h4>
              <div className="flex justify-between mb-3 text-gray-600">
                <span>Total Items</span>
                <span>{cart.products.length}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-4">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center py-20">
          <img src={EmptyCart} alt="Empty Cart" className="h-64 mb-6" />
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
