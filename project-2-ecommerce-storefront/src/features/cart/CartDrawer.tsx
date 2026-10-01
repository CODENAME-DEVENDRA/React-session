import { useAppSelector } from "@/app/hooks";
import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { selectCartItems } from "./cartSlice";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const items = useAppSelector(selectCartItems);
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box sx={{ width: 400 }}>
        {items.length === 0 ? (
          <Typography sx={{ color: "secondary" }}>
            Your cart is empty
          </Typography>
        ) : (
          <List>
            {items?.map((item) => (
              <ListItem>{item.title}</ListItem>
            ))}
          </List>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
