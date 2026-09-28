import type { Product } from "@/types";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
    </Card>
  );
};

export default ProductCard;
