const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getUsers = async (skip: number = 1, limit: number = 10) => {
  const response = await fetch(`${API_BASE_URL}users?skip=${skip}&limit=${limit}`);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const getUserById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};