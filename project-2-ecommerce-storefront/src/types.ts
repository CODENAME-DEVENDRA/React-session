export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type SortOption = "featured" | "price-asc" | "price-desc";

export interface Filters {
  category: string;
  search: string;
  sort: SortOption;
}

export interface CartItem extends Product {
  quantity: number;
}
