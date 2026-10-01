import type { Filters, Product } from "@/types";

export function applyFilters(
  products: Product[],
  { category, search, sort }: Filters,
) {
  let result = products;

  //1.category
  if (category && category !== "All") {
    result = result.filter((p) => p.category === category);
  }

  //2.search
  const query = search.trim().toLowerCase();
  if (query) {
    result = result.filter((p) => p.title.toLowerCase().includes(query));
  }

  //3.sort
  result = [...result];
  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }

  return result;
}
