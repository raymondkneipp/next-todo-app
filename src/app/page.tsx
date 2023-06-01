import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold font-heading text-4xl text-center">
          The Best Todo App Ever
        </h1>
        <p className="text-slate-300 text-center max-w-md mx-auto">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        
      <Link href="/todos" className="py-3 px-6 rounded-xl bg-slate-300 text-slate-900 font-heading font-semibold text-lg hover:bg-slate-100 transition-colors">Get Started</Link>
      </div>
    </>
  );
}
