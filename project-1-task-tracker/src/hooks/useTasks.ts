import { createTask, fetchTasks } from "@/api/taskApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//READ
export function useTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
}

//CREATE
export function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (text: string) => createTask(text),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
