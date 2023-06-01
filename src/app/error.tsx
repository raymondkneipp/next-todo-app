"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <span className="text-red-400">There was a problem</span>
        <h1 className="font-semibold font-heading text-4xl text-center capitalize">
          {error.message}
        </h1>
        <p className="text-slate-300 text-center max-w-md mx-auto">Please try again later or contact support if the problem persists.</p>

        <div className="flex gap-2">
          <button
            onClick={reset}
            className="py-2 px-3 rounded-xl bg-slate-300 text-slate-900 font-heading font-semibold hover:bg-slate-100 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="py-2 px-3 rounded-xl bg-slate-800 text-white font-heading font-semibold hover:bg-slate-700 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}
