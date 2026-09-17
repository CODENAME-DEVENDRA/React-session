import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <ShoppingCartIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "inherit",
          }}
        >
          Storefront
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
