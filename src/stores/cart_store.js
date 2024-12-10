import { defineStore } from "pinia";
import { ref } from "vue";
import { CartItem } from "../models/cart_item";
import { useProductStore } from "./product_store";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  const getAllMyCartFromLocalStorage = () => {
    const cartItemsInLocalStorage = localStorage.getItem("cartItems");
    if (cartItemsInLocalStorage) {
      const cartItemsFromLocalStorage = JSON.parse(cartItemsInLocalStorage);
      cartItems.value = cartItemsFromLocalStorage.map((cartItem) => {
        return new CartItem(cartItem.product);
      });
    }
  };

  const toggleCartProduct = (idProduct) => {
    const productStore = useProductStore();
    const product = productStore.products.find(
      (product) => product.id === idProduct
    );

    cartItems.value.push(new CartItem(product));

    product.isInMyCart = !product.isInMyCart;
    saveToLocalStorage();
  };

  const removeFromCart = (idProduct) => {
    const index = cartItems.value.findIndex(
      (cartItem) => cartItem.product.id === idProduct
    );

    if (index !== -1) {
      cartItems.value.splice(index, 1);
    }

    const productStore = useProductStore();
    const product = productStore.products.find(
      (product) => product.id === idProduct
    );

    if (product) {
      product.isInMyCart = false;
    }
    saveToLocalStorage();
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  };

  return {
    cartItems,
    toggleCartProduct,
    getAllMyCartFromLocalStorage,
    removeFromCart,
  };
});
