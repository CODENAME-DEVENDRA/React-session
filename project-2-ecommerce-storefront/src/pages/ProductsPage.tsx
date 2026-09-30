import { useAppSelector } from "@/app/hooks";
import { applyFilters } from "@/features/filter/applyFilters";
import { selectFilters } from "@/features/filter/filterSlice";
import ProductFilters from "@/features/filter/ProductFilters";
import ProductCard from "@/features/products/ProductCard";
import { useProducts } from "@/features/products/useProducts";
import { Alert, Box, CircularProgress, Container } from "@mui/material";
import { useMemo } from "react";

const ProductsPage = () => {
  const { data: products, loading, error } = useProducts();

  const filters = useAppSelector(selectFilters);

  const updatedProducts = useMemo(
    () => (products ? applyFilters(products, filters) : []),
    [products, filters],
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box>{loading && <CircularProgress aria-label="Loading…" />}</Box>
      <Box>{error && <Alert severity="error">{error.message}</Alert>}</Box>
      <Box>
        {!loading && !error && products?.length === 0 && (
          <Alert severity="info">No products found.</Alert>
        )}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "250px 1fr" },
          gap: 2,
        }}
      >
        <Box sx={{ position: { md: "sticky" }, top: 10 }}>
          <ProductFilters />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            },
            gap: 2,
          }}
        >
          {!loading &&
            !error &&
            updatedProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductsPage;
