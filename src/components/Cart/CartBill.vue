<script setup>
import { useCartStore } from "../../stores/cart_store";

const cartStore = useCartStore();
const tax = 0.08;

const totalPrice = () => {
  return cartStore.cartItems.reduce((accumulator, currentValue, index) => {
    return accumulator + (currentValue.product.price + currentValue.quantity);
  }, 0);
};
</script>

<template>
  <div class="text-start">
    <p>Order Summary</p>
    <ul class="mt-3">
      <template
        :key="item.product.id"
        v-for="(item, index) in cartStore.cartItems"
      >
        <li class="d-flex justify-content-between text-secondary mt-2">
          <div>x{{ item.quantity }} {{ item.product.name }}</div>
          <div>${{ item.quantity * item.product.price }}</div>
        </li>
      </template>
    </ul>
    <hr class="mt-4 border border-dark" />
    <div>
      <p class="text-secondary">Delivery today with</p>
      <div class="d-flex mt-4 gap-2">
        <i class="fa-solid fa-truck"></i>
        <p>Skinny Express</p>
      </div>
      <div class="d-flex mt-3 gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <p>Deliver to <span class="fw-bold">Jakarta, Indonesia</span></p>
      </div>
    </div>
    <hr class="mt-4 border border-dark" />
    <div class="d-flex justify-content-between text-secondary">
      <p>Total</p>
      <p>${{ totalPrice() }}</p>
    </div>
    <div class="d-flex justify-content-between text-secondary mt-3">
      <p>Tax</p>
      <p>${{ totalPrice() * tax }}</p>
    </div>
    <hr class="mt-4 border border-dark" />
    <div class="d-flex justify-content-between fw-bold mt-3">
      <p>Order Total</p>
      <p class="fs-5">${{ totalPrice() + totalPrice() * tax }}</p>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <button type="button" class="btn w-50 py-2 btn-warning">
        <span class="text-white fw-bold">Checkout</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
