// Example: Product API service

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getUser = async () => {
  const response = await fetch(API_BASE_URL + "auth/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

export const postLogin = async (user: any) => {
  const response = await fetch(API_BASE_URL + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error("Failed to login");
  return response.json();
};
