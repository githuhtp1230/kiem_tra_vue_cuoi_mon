<script setup>
import { onMounted, onUnmounted } from "vue";
import { useProductStore } from "../../stores/product_store";
import ProductItem from "./ProductItem.vue";

const productStore = useProductStore();
onMounted(() => {
  productStore.checkIsInMyCart();
});
productStore;
</script>

<template>
  <div class="container">
    <div class="row">
      <ProductItem
        v-for="(item, index) in productStore.products"
        :key="item.id"
        :product="item"
        class="col-3"
      />
    </div>
  </div>
</template>

<style scoped></style>
