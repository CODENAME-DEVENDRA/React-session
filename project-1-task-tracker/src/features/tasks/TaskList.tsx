import { useTasks } from "@/hooks/useTasks";
import { Loader2 } from "lucide-react";
import TaskItem from "./TaskItem";
import { useMemo } from "react";
import { useFilterStore } from "@/store/useFilterStore";

const TaskList = () => {
  const { data: tasks, isLoading, isError, error } = useTasks();
  const filter = useFilterStore((state) => state.filter);
  const search = useFilterStore((state) => state.search);

  const filteredTasks = useMemo(() => {
    if (!tasks) return [];
    return tasks
      .filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true; //all tasks
      })
      .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));
  }, [tasks, filter, search]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center gap-2 h-64">
        <Loader2 className="size-4 animate-spin" />
        Loading tasks...
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-64 text-destructive">
        Error: {error.message}
      </div>
    );

  if (!tasks || tasks.length === 0)
    return (
      <div className="flex justify-center items-center h-64 text-muted-foreground">
        No tasks found.
      </div>
    );

  return (
    <ul className="flex flex-col gap-2">
      {filteredTasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
