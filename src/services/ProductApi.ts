const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;
const API_URL = API_BASE_URL + 'products';

export const getProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getProductById = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createProduct = async (product: any) => {
  const response = await fetch(API_URL + '/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProduct = async (id: string, product: any) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
