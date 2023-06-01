export default function Loading() {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="bg-slate-800 h-11 w-full rounded-xl"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
        <div className="rounded-xl bg-slate-800 h-10"></div>
        <div className="rounded-xl bg-slate-800 h-10"></div>
      </div>
    </div>
  );
}
