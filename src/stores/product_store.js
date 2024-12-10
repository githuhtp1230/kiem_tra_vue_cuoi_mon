import { defineStore } from "pinia";
import { ref } from "vue";
import { Product } from "../models/product";

export const useProductStore = defineStore("product", () => {
  const products = ref([
    new Product(
      1,
      "Product name 1",
      "dẻo",
      10000,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s"
    ),
    new Product(
      2,
      "Product name 2",
      "mềm",
      20000,
      "https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-giay-thumb.jpeg"
    ),
    new Product(
      3,
      "Product name 3",
      "cứng nhất",
      30000,
      "https://drake.vn/image/catalog/H%C3%ACnh%20content/gia%CC%80y%20Converse%20da%20bo%CC%81ng/giay-converse-da-bong-5.jpg"
    ),
    new Product(
      4,
      "Product name 4",
      "siêu chất lượng",
      40000,
      "https://drake.vn/image/catalog/H%C3%ACnh%20content/Converse%20xa%CC%81m/Converse-xam-5.jpg"
    ),
  ]);

  const getDetailProduct = async (productId) => {
    try {
      const res = await httpRequest.get(`/products/${3}`);
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = (id) => {
    console.log(id);
    for (let product of products.value) {
      if (product.id == id) {
        console.log(product);
        return product;
      }
    }
  };

  const checkIsInMyCart = () => {
    const cartItemsInLocalStorage = localStorage.getItem("cartItems");
    if (cartItemsInLocalStorage) {
      const cartItemsFromLocalStorage = JSON.parse(cartItemsInLocalStorage);
      for (var product of products.value) {
        const checkIsInMyCart = cartItemsFromLocalStorage.some((cartItem) => {
          return cartItem.product.id === product.id;
        });
        if (checkIsInMyCart) {
          product.isInMyCart = true;
        }
      }
    }
  };

  return {
    products,
    getDetailProduct,
    getProductById,
    checkIsInMyCart,
  };
});
