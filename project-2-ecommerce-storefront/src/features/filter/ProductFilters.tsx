import {
  Box,
  Chip,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCategories } from "./useCategories";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectFilters, setCategory, setSearch, setSort } from "./filterSlice";
import type { SortOption } from "@/types";

const ProductFilters = () => {
  const { category, search, sort } = useAppSelector(selectFilters);
  const categories = ["All", ...useCategories()];
  const dispatch = useAppDispatch();

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Stack spacing={2}>
        <TextField
          label="Search Products"
          fullWidth
          size="small"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />

        <Box>
          <Typography color="primary">Category</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
            {categories?.map((c) => {
              const selected = c === category;
              return (
                <Chip
                  key={c}
                  label={c}
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => dispatch(setCategory(c))}
                  color={selected ? "primary" : "default"}
                  variant={selected ? "filled" : "outlined"}
                />
              );
            })}
          </Box>
        </Box>

        <TextField
          select
          size="small"
          label="Sort"
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value as SortOption))}
        >
          <MenuItem value="featured">Featured</MenuItem>
          <MenuItem value="price-asc">Price : Low to High</MenuItem>
          <MenuItem value="price-desc">Price : High to Low</MenuItem>
        </TextField>
      </Stack>
    </Paper>
  );
};

export default ProductFilters;
