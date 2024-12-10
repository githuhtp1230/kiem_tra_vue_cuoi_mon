<script setup>
import { useUserStore } from "../stores/user_store";

const userStore = useUserStore();
</script>

<template>
  <header class="bg-light border-bottom">
    <div
      class="container d-flex justify-content-between align-items-center p-3"
    >
      <div class="d-flex align-items-center">
        <p class="mb-0 me-4 fw-bold fs-4">
          HTP<span class="text-danger">SHOP</span>
        </p>
        <nav>
          <ul class="d-flex list-unstyled mb-0">
            <!-- <li class="px-3">
              <router-link to="/" class="text-decoration-none text-dark"
                >Home</router-link
              >
            </li> -->
            <li class="px-3">
              <router-link to="/products" class="text-decoration-none text-dark"
                >Home</router-link
              >
            </li>
            <li v-if="!userStore.isLoggedIn" class="px-3">
              <router-link to="/login" class="text-decoration-none text-dark"
                >Login</router-link
              >
            </li>
            <li
              v-if="userStore.isLoggedIn"
              class="px-3 logout"
              @click="userStore.logout()"
            >
              <a>Logout</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <router-link to="/cart" class="text-decoration-none text-dark">
          <i class="fa-solid fa-cart-shopping fs-4 text-secondary"></i
        ></router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logout:hover {
  cursor: pointer;
}
</style>
