import Link from "next/link";
import AppIcon from "./AppIcon";
import LogoMark from "./LogoMark";

export default function DocsHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-background-dark/80 px-6 py-3 backdrop-blur-md lg:px-10">
      <div className="flex items-center gap-8">
        <LogoMark />
        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm font-semibold text-primary" href="/docs">
            Docs
          </Link>
          <Link className="text-sm text-slate-300 hover:text-primary" href="#">
            API
          </Link>
          <Link
            className="text-sm text-slate-300 hover:text-primary"
            href="https://github.com"
            target="_blank"
          >
            GitHub
          </Link>
          <Link className="text-sm text-slate-300 hover:text-primary" href="#">
            Changelog
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <AppIcon
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            name="search"
          />
          <input
            className="w-64 rounded-lg bg-slate-800 py-2 pl-10 pr-4 text-sm outline-none ring-primary/50 focus:ring-2"
            placeholder="Search documentation..."
            type="text"
          />
        </div>
        <Link
          className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white"
          href="/download"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
