import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDeleteTask, useToggleTask } from "@/hooks/useTasks";
import { cn } from "@/lib/utils";
import type { Task } from "@/types";
import { Trash2 } from "lucide-react";

const TaskItem = ({ task }: { task: Task }) => {
  const toggle = useToggleTask();
  const deleteTask = useDeleteTask();

  return (
    <li className="flex items-center gap-2 rounded-md border p-2">
      <Checkbox
        checked={task.completed}
        onCheckedChange={(completed) =>
          toggle.mutate({ id: task.id, completed: completed as boolean })
        }
      />
      <span
        className={cn(
          "text-sm",
          task.completed && "text-muted-foreground line-through",
        )}
      >
        {task.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="ml-auto"
        onClick={() => deleteTask.mutate(task.id)}
      >
        <Trash2 />
      </Button>
    </li>
  );
};

export default TaskItem;
