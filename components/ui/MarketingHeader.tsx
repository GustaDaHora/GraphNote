import Link from "next/link";
import AppIcon from "./AppIcon";
import LogoMark from "./LogoMark";

type NavItem = {
  href: string;
  label: string;
};

type MarketingHeaderProps = {
  navItems: NavItem[];
};

export default function MarketingHeader({ navItems }: MarketingHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <LogoMark />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-primary"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="hidden rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 sm:inline-flex"
            href="https://github.com"
            target="_blank"
          >
            <AppIcon className="mr-2 h-4 w-4" name="terminal" />
            GitHub
          </Link>
          <Link
            className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
            href="/download"
          >
            Download
          </Link>
          <button className="md:hidden">
            <AppIcon className="h-5 w-5" name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
