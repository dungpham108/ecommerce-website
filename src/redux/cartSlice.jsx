import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
  totalQuantity: 0,
  totalPrice: 0,

  allProducts: [],
  filteredProducts: [],
  filters: {
    category: "All",
    price: "All",
    colors: "All",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].totalQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, totalQuantity: 1 };
        state.products.push(tempProduct);
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeFromCart: (state, action) => {
      const nextProducts = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = nextProducts;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (state.products[itemIndex].totalQuantity > 1) {
        state.products[itemIndex].totalQuantity -= 1;
      } else if (state.products[itemIndex].totalQuantity === 1) {
        const nextProducts = state.products.filter(
          (product) => product.id !== action.payload
        );
        state.products = nextProducts;
      }
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );

      if (itemIndex >= 0) {
        state.products[itemIndex].totalQuantity++;
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    resetCart: (state) => {
      state.products = [];
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
