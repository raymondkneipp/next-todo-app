import { Todo } from "@/db/schema";
import Link from "next/link";

const TodoItem = ({ title, completed, id }: Todo) => {
  return (
    <Link
      href={`/todos/${id}`}
      className="rounded-xl flex items-center gap-2 px-3 bg-slate-800 hover:bg-slate-700 transition-colors h-11"
    >
      <span className="text-xl">{completed ? "✅" : "❌"}</span>
      <span className="text-slate-300">{title}</span>
    </Link>
  );
};

export default TodoItem;
