<script setup>
import { Product } from "../../models/product";
import { useCartStore } from "../../stores/cart_store";

defineProps({
  product: {
    type: Product,
    required: true,
  },
});

const cartStore = useCartStore();
</script>

<template>
  <router-link :to="`/products/${product.id}`">
    <div class="p-3">
      <div class="card border-0 rounded-0 shadow">
        <img :src="product.image" class="card-img-top rounded-0" alt="..." />
        <div class="card-body p-3">
          <h4 class="card-title">{{ product.name }}</h4>
          <p class="text-secondary">{{ product.description }}</p>
          <h5 class="fs-4">{{ product.price }}$</h5>
        </div>
        <div class="row align-items-center text-center g-0">
          <div>
            <!-- Kiểm tra nếu sản phẩm đã có trong giỏ hàng -->
            <a
              v-if="product.isInMyCart"
              href="#"
              class="btn btn-danger w-100 p-3 rounded-0 text-white"
              @click.stop="cartStore.removeFromCart(product.id)"
            >
              REMOVE FROM CART
            </a>

            <!-- Nếu sản phẩm chưa có trong giỏ hàng -->
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
  </router-link>
</template>

<style scoped>
* {
  text-decoration: none;
}

/* Cải tiến card */
.card {
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
}

/* Cải tiến ảnh sản phẩm */
.card-img-top {
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  height: 200px;
  width: 100%;
  transition: transform 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.05);
}

/* Cải tiến card body */
.card-body {
  padding: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

/* Cải tiến cho phần giá */
.row h5 {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

/* Cải tiến các nút */
.btn {
  font-size: 13px;
  font-weight: bold;
  padding: 12px;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
}

.btn-danger {
  background-color: #e74c3c;
  border: none;
}

.btn-danger:hover {
  background-color: #c0392b;
}

.btn-dark {
  background-color: #34495e;
  border: none;
}

.btn-dark:hover {
  background-color: #2c3e50;
}
</style>
