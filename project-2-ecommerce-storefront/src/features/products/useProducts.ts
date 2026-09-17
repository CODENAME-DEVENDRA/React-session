import { fetchProducts } from "@/api/productsApi";
import { useFetch } from "@/hooks/useFetch";

export function useProducts() {
  return useFetch(fetchProducts, []);
}
