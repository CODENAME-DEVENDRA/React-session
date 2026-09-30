import { fetchCategories } from "@/api/productsApi";
import { useFetch } from "@/hooks/useFetch";

export function useCategories() {
  const { data } = useFetch(fetchCategories, []);
  return data ?? [];
}
