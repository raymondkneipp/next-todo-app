import DeleteTodo from "@/components/DeleteTodo";
import TodoItem from "@/components/TodoItem";
import ToggleTodo from "@/components/ToggleTodo";
import { Todo } from "@/db/schema";
import { delay } from "@/lib/utils";

async function fetchTodo(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/todos/${id}`,
    {
      cache: "no-store",
    },
  );

  await delay();

  const todo = await response.json();
  return todo as Todo;
}

interface Props {
  params: {
    id: string;
  };
}

export default async function TodoPage({ params }: Props) {
  const todo = await fetchTodo(params.id);

  return (
    <>
      <div className="flex flex-col gap-2">
        <TodoItem {...todo} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
          <ToggleTodo {...todo} />

          <DeleteTodo id={todo.id} />
        </div>
      </div>
    </>
  );
}
