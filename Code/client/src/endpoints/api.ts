// src/endpoints/client/api.ts

import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
});

// Attach token automatically
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Optional: handle 401 globally
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // e.g. logout or redirect
      console.warn("Unauthorized - redirecting...");
    }
    return Promise.reject(err);
  }
);

export default apiClient;