//Step 1
//QueryClient holds the cache and default options for all queries
//cache - practice of storing copy of data so same data can be used quickly, instead of fetching it from server
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
