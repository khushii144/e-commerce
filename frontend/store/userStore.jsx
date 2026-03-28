import { create } from "zustand";

const useUserStore = create((set) => ({
  // LocalStorage se user load kar rahe hain
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("authToken") || null,

  // Login ke baad user set hoga
  setUser: (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("authToken", token);

    set({
      user: userData,
      token: token,
    });
  },

  // Logout
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");

    set({
      user: null,
      token: null,
    });
  },
}));

export default useUserStore;
