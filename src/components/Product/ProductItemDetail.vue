<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "../../stores/product_store";
import { onMounted, ref } from "vue";
import { useCartStore } from "../../stores/cart_store";

const route = useRoute();

const productStore = useProductStore();
const cartStore = useCartStore();

let product = ref({});

onMounted(() => {
  product.value = productStore.products.find(
    (product) => product.id == route.params.id
  );
  console.log(product);
});
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="container w-75 row py-4">
      <div class="col-6">
        <img class="w-100" :src="product.image" alt="" />
      </div>
      <div class="col-6">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="fs-3">{{ product.price }}$</p>

        <div class="col-9 align-items-center text-center g-0">
          <div>
            <a
              v-if="product.isInMyCart"
              href="#"
              class="btn btn-danger w-100 p-3 rounded-0 text-white"
              @click.stop="cartStore.removeFromCart(product.id)"
            >
              REMOVE FROM CART
            </a>

            <a
              v-else
              href="#"
              class="btn btn-dark w-100 p-3 rounded-0 text-warning"
              @click.stop="cartStore.toggleCartProduct(product.id)"
            >
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
