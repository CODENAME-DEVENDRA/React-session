import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDrawer from "@/features/cart/CartDrawer";
import { useState } from "react";
import { useAppSelector } from "@/app/hooks";
import { selectCartCount } from "@/features/cart/cartSlice";

function Navbar() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const count = useAppSelector(selectCartCount);
  return (
    <>
      <AppBar position="static" elevation={1}>
        <Toolbar
          variant="dense"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ShoppingCartIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "inherit",
              }}
            >
              Storefront
            </Typography>
          </Box>

          <Box>
            <IconButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={count} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Navbar;
