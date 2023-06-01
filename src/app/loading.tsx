export default function Loading() {
  return (
    <>
      <div className="flex flex-col gap-2 animate-pulse">
        <div className="bg-slate-800 h-11 w-full rounded-xl"></div>
        <div className="bg-slate-800 h-11 w-full rounded-xl"></div>
        <div className="bg-slate-800 h-11 w-full rounded-xl"></div>
        <div className="bg-slate-800 h-11 w-full rounded-xl"></div>
      </div>
    </>
  );
}
