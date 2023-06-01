"use client";

import { useRouter } from "next/navigation";
import { Todo } from "@/db/schema";
import { delay } from "@/lib/utils";

const toggleTodo = async ({ id, title, completed }: Todo) => {
  const response = await fetch(
    `http://localhost:3000/api/todos/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        title,
        completed: completed === 1 ? 0 : 1,
      }),
    },
  );

  await delay(3000)

  const todo = await response.json();
  return todo as Todo;
};

const ToggleTodo = ({ id, title, completed }: Todo) => {
  const router = useRouter();

  const handleClick = () => {
    toggleTodo({ id, title, completed })
    router.refresh()
  }
  
  return (
    <button
      className="py-2 px-3 bg-slate-300 hover:bg-slate-100 text-slate-900 transition-colors rounded-xl font-semibold font-heading"
      onClick={handleClick}
    >
      {completed ? "Give Up" : "Complete"}
    </button>
  );
};

export default ToggleTodo;
