import {redirect} from 'next/navigation'
import { delay } from "@/lib/utils";

// async function createTodo() {
//   const response = await fetch(
//     "http://localhost:3000/api/todos",
//     {
//       method: "POST"
//     },
//   );
//
//   wait(3000)
//
//   const todo = await response.json();
//   return todo;
// }

export default async function TodosPage() {
  async function createTodo(data: FormData) {
    "use server";

    const newTodo = {
      title: data.get("title"),
      completed: false,
    };

    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({
        ...newTodo,
      }),
    });

    await delay()

    if (response.ok) {
      redirect('/todos')
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold font-heading text-xl text-center">
          New Task
        </h1>
        <form action={createTodo} className="flex flex-col gap-2">
          <input type="text" name="title" className="bg-transparent rounded-xl border border-slate-700 focus:border-slate-300 outline-none px-3 py-2 transition-colors" />
          <button type="submit" className="py-2 px-3 bg-slate-300 text-slate-900 hover:bg-slate-100 rounded-xl font-semibold font-heading">Create Task</button>
        </form>
      </div>
    </>
  );
}
