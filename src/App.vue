<script setup>
import { onBeforeUnmount } from "vue";
import ContentFooter from "./components/ContentFooter.vue";
import Navigator from "./components/Navigator.vue";
import { useCartStore } from "./stores/cart_store";

const cartStore = useCartStore();
</script>

<template>
  <Navigator />
  <RouterView></RouterView>
  <ContentFooter />
</template>

<style scoped></style>
