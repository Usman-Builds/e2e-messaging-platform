// src/lib/endpoints.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ENDPOINTS = {
  // -------------------------
  // AUTH
  // -------------------------
  AUTH: {
    REGISTER: `${BASE_URL}/auth/register`,
    LOGIN: `${BASE_URL}/auth/login`,
    GOOGLE: `${BASE_URL}/auth/google`,
  },

  // -------------------------
  // USERS (JWT Protected)
  // -------------------------
  USERS: {
    ME: `${BASE_URL}/users/me`,
    UPDATE: `${BASE_URL}/users`,
    DELETE: `${BASE_URL}/users`,
    SET_USERNAME: `${BASE_URL}/users/username`,
    CHECK_USERNAME: `${BASE_URL}/users/check-username`, // use query param
  },
};