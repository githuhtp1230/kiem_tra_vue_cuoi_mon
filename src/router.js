import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Products from "./components/Product/Products.vue";
import Cart from "./components/Cart/Cart.vue";
import ProductItemDetail from "./components/Product/ProductItemDetail.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/products", name: "products", component: Products },
  {
    path: "/products/:id",
    name: "productDetail",
    component: ProductItemDetail,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = false;
  const token = localStorage.getItem("token");
  if (token) {
    isAuthenticated = true;
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: "login" }); // nếu chưa đăng nhập => login
    } else {
      next(); // nếu đã đăng nhập => vào trang yêu cầu
    }
  } else {
    next(); // nếu route này không yêu cầu đăng nhập => vào trang đó
  }
});

export default router;
