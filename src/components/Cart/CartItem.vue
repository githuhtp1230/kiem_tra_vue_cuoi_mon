<script setup lang="ts">
import { inject } from "vue";
import { useCartStore } from "../../stores/cart_store";

defineProps({
  cartItem: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();
</script>

<template>
  <hr class="my-4 border border-dark" />
  <div class="d-flex align-items-start gap-2">
    <div class="text-start">
      <h3 class="fs-5">{{ cartItem.product.name }}</h3>
      <div class="d-flex gap-3">
        <div class="" style="flex: 1">
          <img class="w-100" :src="cartItem.product.image" alt="" />
        </div>
        <div
          class="d-flex flex-column align-items-start justify-content-between"
          style="flex: 2"
        >
          <p class="text-secondary">{{ cartItem.product.description }}</p>
          <p>Original price ${{ cartItem.product.price }}</p>
          <div class="d-flex justify-content-between w-100">
            <div class="d-flex gap-2">
              <i
                class="fa-solid fa-trash trash me-3"
                @click="cartStore.removeFromCart(cartItem.product.id)"
              ></i>
              <button
                :disabled="cartItem.quantity == 1"
                class="btn btn-outline-dark rounded-circle d-flex p-2 justify-content-center align-items-center"
                @click="cartItem.quantity--"
              >
                <span>-</span>
              </button>
              <p>{{ cartItem.quantity }}</p>
              <button
                class="btn btn-outline-dark rounded-circle d-flex p-2 justify-content-center align-items-center"
                @click="cartItem.quantity++"
              >
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 1px;
  height: 1px;
}

.trash {
  cursor: pointer;
}
</style>
