import type { Product } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

//GET /products
export async function fetchProducts(): Promise<Product[]> {
  const { data } = await api.get("/products");
  return data;
}
