src/api/itemsApi.js

const API_URL = 'https://api.example.com/items';

export async function getItems() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
}
