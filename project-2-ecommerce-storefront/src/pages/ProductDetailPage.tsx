import { useAppDispatch } from "@/app/hooks";
import { addToCart } from "@/features/cart/cartSlice";
import { useProductById } from "@/features/products/useProducts";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, loading, error } = useProductById(id);
  const dispatch = useAppDispatch();

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          height: "100vh",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>
          {error?.message ?? "Product not found."}
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          alignItems: "center",
          mt: 4,
        }}
      >
        <Box
          component="img"
          src={product?.image}
          alt={product?.title}
          sx={{ maxWidth: "100%", maxHeight: "100%" }}
        />

        <Stack spacing={2}>
          <Chip
            label={product?.category}
            sx={{ textTransform: "capitalize" }}
          />
          <Typography variant="h3">{product?.title}</Typography>
          <Typography variant="body1">
            Price: ${product?.price.toFixed(2)}
          </Typography>
          <Typography variant="body2">{product?.description}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProductDetailPage;
