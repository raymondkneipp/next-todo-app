import TodoItem from "@/components/TodoItem";
import { Todo } from "@/db/schema";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { delay } from "@/lib/utils";

export const revalidate = 0;

async function fetchTodos() {
  await delay();

  return db.select().from(todos).all();
}

export default async function TodosPage() {
  const todos = await fetchTodos();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold font-heading text-xl text-center">
        Your Tasks
      </h1>
      {todos.map((todo: Todo) => <TodoItem {...todo} key={todo.id} />)}
    </div>
  );
}
