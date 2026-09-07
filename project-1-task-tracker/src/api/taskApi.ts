import type { Task } from "@/types";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL; // Default to localhost if not set
console.log("BASE_API_URL:", BASE_API_URL); // Log the value of BASE_API_URL

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

//READ
export async function fetchTasks(): Promise<Task[]> {
  return request<Task[]>("/tasks");
}

//CREATE
export async function createTask(text: string): Promise<Task> {
  return request<Task>("/tasks", {
    method: "POST",
    body: JSON.stringify({ text, completed: false }),
  });
}

//UPDATE
export async function updateTask(
  id: string,
  updates: Partial<Task>,
): Promise<Task> {
  return request<Task>(`/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updates),
  });
}

//DELETE
export async function deleteTask(id: string): Promise<void> {
  await request<unknown>(`/tasks/${id}`, {
    method: "DELETE",
  });
}
