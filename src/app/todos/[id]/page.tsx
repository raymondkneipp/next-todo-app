import DeleteTodo from "@/components/DeleteTodo";
import TodoItem from "@/components/TodoItem";
import ToggleTodo from "@/components/ToggleTodo";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { notFound } from "next/navigation";
import { delay } from "@/lib/utils";

export const revalidate = 0;

async function fetchTodo(id: string) {
  const res = db.select().from(todos).where(eq(todos.id, parseInt(id))).get();

  if (!res) {
    notFound();
  }

  await delay();

  return res;
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
          {/* @ts-expect-error Server Component */}
          <ToggleTodo {...todo} />

          {/* @ts-expect-error Server Component */}
          <DeleteTodo id={todo.id} />
        </div>
      </div>
    </>
  );
}
