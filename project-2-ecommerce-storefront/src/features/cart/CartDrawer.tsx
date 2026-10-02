import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "./cartSlice";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();
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
              <ListItem>
                <Stack
                  direction="row"
                  sx={{ justifyContent: "space-between", alignItems: "center" }}
                  spacing={1}
                >
                  <Stack spacing={1} direction="row">
                    <Avatar src={item.image} variant="rounded" />
                    <Typography>{item.title}</Typography>
                  </Stack>
                  <IconButton
                    size="small"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <DeleteOutlinedIcon fontSize="small" />
                  </IconButton>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <IconButton onClick={() => dispatch(decrementQty(item.id))}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography>{item?.quantity}</Typography>
                  <IconButton onClick={() => dispatch(incrementQty(item.id))}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </ListItem>
            ))}
          </List>
        )}

        <Divider />
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center", p: 2 }}
          spacing={1}
        >
          <Typography>Total</Typography>
          <Typography>${total.toFixed(2)}</Typography>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
