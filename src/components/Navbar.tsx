import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container border-b border-slate-800 py-8 flex items-center justify-between">
      <Link href="/" className="font-heading font-semibold text-xl">
        📝 Taskify
      </Link>
      <nav className="flex items-center gap-8">
        <Link
          href="/todos"
          className="text-slate-300 hover:text-white transition-colors"
        >
          Tasks
        </Link>

        <Link
          href="/todos/create"
          className="py-2 px-4 rounded-xl bg-slate-300 text-slate-900 font-heading font-semibold hover:bg-slate-100 transition-colors"
        >
          New
        </Link>
      </nav>
    </header>
  );
}
