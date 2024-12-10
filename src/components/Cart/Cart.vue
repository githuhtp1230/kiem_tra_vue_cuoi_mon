<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import { useCartStore } from "../../stores/cart_store";
import CartItem from "./CartItem.vue";
import CartBill from "./CartBill.vue";

const cartStore = useCartStore();
onMounted(() => {
  cartStore.getAllMyCartFromLocalStorage();
});
</script>

<template>
  <div class="container d-flex gap-3 py-4">
    <div style="flex: 1.5">
      <CartItem
        v-if="cartStore.cartItems.length > 0"
        v-for="(item, index) in cartStore.cartItems"
        :key="item.product.id"
        :cartItem="item"
      />
      <div
        v-else
        class="d-flex h-100 justify-content-center align-items-center"
      >
        <p class="fs-3">No Products</p>
      </div>
    </div>
    <CartBill style="flex: 1" />
  </div>
</template>

<style scoped></style>
