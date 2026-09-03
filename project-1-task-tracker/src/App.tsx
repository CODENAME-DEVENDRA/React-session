import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import AddTaskForm from "./features/tasks/AddTaskForm";

function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Task Tracker</CardTitle>
          <CardDescription>CRUD operations</CardDescription>
        </CardHeader>

        <CardContent>
          <AddTaskForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
