import { createTask, deleteTask, fetchTasks, updateTask } from "@/api/taskApi";
import type { Task } from "@/types";
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

//UPDATE
export function useToggleTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }: Pick<Task, "id" | "completed">) =>
      updateTask(id, { completed }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
