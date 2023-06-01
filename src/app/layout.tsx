import Link from "next/link";
import "./globals.css";
import { Inter, Lexend } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata = {
  title: "The Best Todo App Ever | Taskify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} font-sans bg-slate-900 text-white min-h-screen flex flex-col justify-center`}
      >
        <header className="container border-b border-slate-800 py-8 flex items-center justify-between">
          <Link href="/" className="font-heading font-semibold text-xl">
            📝 Taskify
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/todos" className='text-slate-300 hover:text-white transition-colors'>Tasks</Link>

            <Link
              href="/todos/create"
              className="py-2 px-4 rounded-xl bg-slate-300 text-slate-900 font-heading font-semibold hover:bg-slate-100 transition-colors"
            >
              New
            </Link>
          </nav>
        </header>
        <main className="container flex-1 flex flex-col justify-center">
          {children}
        </main>
        <footer className="container border-t border-slate-800 py-8 flex items-center justify-between">
          <Link
            href="https://raymondkneipp.com"
            className="flex items-center gap-8 opacity-60 hover:opacity-100 transition-opacity"
            target="_blank"
          >
            <Image
              src="https://raymondkneipp.com/logo.svg"
              alt="Raymond Kneipp Logo"
              width={50}
              height={50}
            />
            <span>
              Created by Raymond Kneipp
            </span>
          </Link>
        </footer>
      </body>
    </html>
  );
}
