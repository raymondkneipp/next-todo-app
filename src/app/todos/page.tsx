import TodoItem from "@/components/TodoItem";
import { Todo } from "@/db/schema";
import { delay } from "@/lib/utils";

async function fetchTodos() {
  
  const response = await fetch(
    "http://localhost:3000/api/todos",
    {
      cache: "no-store",
    },
  );

  await delay();

  const todos = await response.json();
  return todos;
}

export default async function TodosPage() {
  const todos = await fetchTodos();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold font-heading text-xl text-center">
        Your Tasks
      </h1>
      {todos.map((todo: Todo) => <TodoItem {...todo} />)}
    </div>
  );
}
