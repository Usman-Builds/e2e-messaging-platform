// src/services/auth.service.ts

import apiClient from "../endpoints/api";
import { ENDPOINTS } from "../endpoints/endpoints";

export const AuthService = {
  register: async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const res = await apiClient.post(ENDPOINTS.AUTH.REGISTER, data);

    if (res.data?.accessToken && typeof window !== "undefined") {
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    return res.data;
  },

  login: async (data: { email: string; password: string }) => {
    const res = await apiClient.post(ENDPOINTS.AUTH.LOGIN, data);

    if (res.data?.accessToken && typeof window !== "undefined") {
      localStorage.setItem("access_token", res.data.accessToken); // ✅ FIXED
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    return res.data;
  },

  googleLogin: () => {
    window.location.href = ENDPOINTS.AUTH.GOOGLE;
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    }
  },
};