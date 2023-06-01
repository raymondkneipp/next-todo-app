"use client";

import { useTransition } from "react";
import { redirect, useRouter } from "next/navigation";
import { Todo } from "@/db/schema";
import { delay } from "@/lib/utils";
import { revalidatePath } from "next/cache";

const deleteTodo = async (id: number) => {
  const response = await fetch(
    `http://localhost:3000/api/todos/${id}`,
    {
      method: "DELETE",
    },
  );

  await delay(3000);

  const todo = await response.json();
  // revalidatePath('/todos')
  redirect('/todos')
};

const DeleteTodo = ({ id }: { id: number }) => {
  let [isPending, startTransition] = useTransition()
  
  return (
    <button
      onClick={() => startTransition(() => deleteTodo(id))}
      className="py-2 px-3 bg-red-400 hover:bg-red-300 transition-colors text-slate-900 rounded-xl font-semibold font-heading"
    >
      Delete
    </button>
  );
};

export default DeleteTodo;
