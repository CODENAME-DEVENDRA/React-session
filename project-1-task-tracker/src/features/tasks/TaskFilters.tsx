import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFilterStore } from "@/store/useFilterStore";

const TaskFilters = () => {
  const Filters = ["all", "completed", "active"];

  //   const filter = useFilterStore((state) => state.filter);
  //   const search = useFilterStore((state) => state.search);
  //   const setSearch = useFilterStore((state) => state.setSearch);
  //   const setFilter = useFilterStore((state) => state.setFilter);

  const { search, filter, setSearch, setFilter } = useFilterStore();

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <Input
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {Filters.map((f) => (
        <Button
          key={f}
          onClick={() => setFilter(f)}
          variant={filter === f ? "default" : "ghost"}
        >
          {f}
        </Button>
      ))}
    </div>
  );
};

export default TaskFilters;
