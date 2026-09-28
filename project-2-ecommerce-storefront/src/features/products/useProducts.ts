import { fetchProductById, fetchProducts } from "@/api/productsApi";
import { useFetch } from "@/hooks/useFetch";

export function useProducts() {
  return useFetch(fetchProducts, []);
}

export function useProductById(id: string) {
  return useFetch(() => fetchProductById(id), [id]);
}
