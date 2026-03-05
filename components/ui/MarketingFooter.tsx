import Link from "next/link";
import AppIcon from "./AppIcon";
import LogoMark from "./LogoMark";

export default function MarketingFooter() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <LogoMark size="sm" />
        <p className="text-sm text-slate-400">
          &copy; 2026 GraphNote. Open source under MIT License.
        </p>
        <div className="flex gap-6 text-slate-400">
          <Link className="transition-colors hover:text-primary" href="#">
            <AppIcon className="h-5 w-5" name="public" />
          </Link>
          <Link className="transition-colors hover:text-primary" href="#">
            <AppIcon className="h-5 w-5" name="alternate_email" />
          </Link>
          <Link
            className="transition-colors hover:text-primary"
            href="https://github.com"
            target="_blank"
          >
            <AppIcon className="h-5 w-5" name="terminal" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
