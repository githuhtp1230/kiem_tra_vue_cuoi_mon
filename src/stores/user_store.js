import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref(localStorage.getItem("token") != null);

  const login = (email, password) => {
    // Simulate login logic
    if (email === "admin" && password === "admin") {
      localStorage.setItem("token", "admin_token");
      localStorage.setItem("token", "fake_token");
      isLoggedIn.value = true;
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    isLoggedIn.value = false;
    localStorage.removeItem("token");
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
});
