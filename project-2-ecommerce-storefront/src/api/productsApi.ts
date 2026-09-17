import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchProducts() {
  const { data } = await api.get("/products");
  return data;
}
