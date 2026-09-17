import ProductCard from "@/features/products/ProductCard";
import { useProducts } from "@/features/products/useProducts";
import { Alert, Box, CircularProgress, Container } from "@mui/material";

const ProductsPage = () => {
  const { data: products, loading, error } = useProducts();
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
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 2,
        }}
      >
        {!loading &&
          !error &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Box>
    </Container>
  );
};

export default ProductsPage;
