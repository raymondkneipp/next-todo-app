import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <span className="text-red-400">There was a problem</span>
        <h1 className="font-semibold font-heading text-4xl text-center capitalize">
          Page Not Found
        </h1>
        <p className="text-slate-300 text-center max-w-md mx-auto">
          The page you are trying to access does not exist.
        </p>

        <Link
          href="/"
          className="py-2 px-3 rounded-xl bg-slate-800 text-white font-heading font-semibold hover:bg-slate-700 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </>
  );
}
