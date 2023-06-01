import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
