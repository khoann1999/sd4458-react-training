// Example: Product API service

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getUser = async () => {
  const response = await fetch(API_BASE_URL + "auth/me");
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

export const postLogin = async (user: any) => {
  const response = await fetch(API_BASE_URL + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "API_BASE_URL",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });
  if (!response.ok) throw new Error("Failed to login");
  return response.json();
};
