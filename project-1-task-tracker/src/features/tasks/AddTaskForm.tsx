import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateTask } from "@/hooks/useTasks";
import { Plus } from "lucide-react";
import { useState } from "react";

const AddTaskForm = () => {
  const [text, setText] = useState("");
  const addTask = useCreateTask();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask.mutate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button type="submit">
          Add Task
          <Plus />
        </Button>
      </form>
    </div>
  );
};

export default AddTaskForm;
