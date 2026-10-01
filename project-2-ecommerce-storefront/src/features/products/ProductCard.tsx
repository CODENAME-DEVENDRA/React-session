import type { Product } from "@/types";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "@/app/hooks";
import { addToCart } from "../cart/cartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ height: 150, objectFit: "contain", p: 2 }}
        />
        <CardContent>
          <Chip
            label={product.category}
            size="small"
            sx={{ textTransform: "capitalize" }}
          />
          <Typography variant="subtitle1">{product.title}</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ mt: "auto", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
