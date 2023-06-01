import { db } from "@/db";
import { Todo, todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

async function giveUpTodo(data: FormData) {
  "use server";
  
  db.update(todos)
    .set({ completed: 0 })
    .where(eq(todos.id, parseInt(data.get("id") as string))).run();
  
  redirect("/todos");
}

async function finishTodo(data: FormData) {
  "use server";

  db.update(todos)
    .set({ completed: 1 })
    .where(eq(todos.id, parseInt(data.get("id") as string))).run();
  
  redirect("/todos");
}

export default async function ToggleTodo({ id, completed }: Todo) {
  return (
    <form action={completed ? giveUpTodo : finishTodo} className="w-full">
      <button
        name="id"
        value={id}
        type="submit"
        className="py-2 px-3 bg-slate-300 hover:bg-slate-200 transition-colors text-slate-900 rounded-xl font-semibold font-heading w-full"
      >
        {completed ? 'Give up' : 'Finish'}
      </button>
    </form>
  );
}
