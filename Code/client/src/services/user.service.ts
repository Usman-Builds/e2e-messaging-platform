// src/services/user.service.ts

import apiClient from "../endpoints/api";
import { ENDPOINTS } from "../endpoints/endpoints";

export const UserService = {
  // 👤 Get current user
  getMe: async () => {
    const res = await apiClient.get(ENDPOINTS.USERS.ME);
    return res.data;
  },

  // ✏️ Update profile/settings
  update: async (data) => {
    const res = await apiClient.patch(ENDPOINTS.USERS.UPDATE, data);
    return res.data;
  },

  // 🧪 Check username availability
  checkUsername: async (username) => {
    const res = await apiClient.get(
      `${ENDPOINTS.USERS.CHECK_USERNAME}?username=${username}`
    );
    return res.data;
  },

  // 👤 Set username
  setUsername: async (username) => {
    const res = await apiClient.post(
      ENDPOINTS.USERS.SET_USERNAME,
      { username }
    );
    return res.data;
  },

  // 🗑️ Delete account
  remove: async () => {
    const res = await apiClient.delete(ENDPOINTS.USERS.DELETE);
    return res.data;
  },
};