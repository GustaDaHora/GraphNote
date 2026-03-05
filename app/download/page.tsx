import Link from "next/link";
import AppIcon from "@/components/ui/AppIcon";
import LogoMark from "@/components/ui/LogoMark";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900 px-6 py-4 md:px-20">
        <div className="flex items-center justify-between">
          <LogoMark />
          <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
            <nav className="flex items-center gap-8">
              <Link className="text-sm font-medium text-slate-300 hover:text-primary" href="/#features">
                Features
              </Link>
              <Link className="text-sm font-medium text-slate-300 hover:text-primary" href="/docs">
                Docs
              </Link>
              <Link className="text-sm font-medium text-slate-300 hover:text-primary" href="#">
                Community
              </Link>
            </nav>
            <button className="h-10 min-w-[100px] rounded-lg bg-primary px-5 text-sm font-bold text-white transition-opacity hover:opacity-90">
              Sign In
            </button>
          </div>
          <div className="md:hidden">
            <AppIcon className="h-5 w-5" name="menu" />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1024px] px-6 py-12 md:py-20">
        <section className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-6xl">
            Get GraphNote
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
            Experience the next generation of networked thought. Build your
            knowledge graph locally with the privacy you deserve.
          </p>
        </section>

        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4 text-primary">
              <AppIcon className="h-10 w-10" name="grid_view" />
              <h3 className="text-xl font-bold">Windows</h3>
            </div>
            <p className="text-sm text-slate-400">
              Requires Windows 10 or later (64-bit).
            </p>
            <button className="h-12 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
              Download for Windows
            </button>
          </article>

          <article className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4 text-primary">
              <AppIcon className="h-10 w-10" name="laptop_mac" />
              <h3 className="text-xl font-bold">macOS</h3>
            </div>
            <p className="text-sm text-slate-400">
              Universal binary for Apple Silicon and Intel Macs.
            </p>
            <button className="h-12 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
              Download for macOS
            </button>
          </article>

          <article className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4 text-primary">
              <AppIcon className="h-10 w-10" name="terminal" />
              <h3 className="text-xl font-bold">Linux</h3>
            </div>
            <div className="flex flex-col gap-2">
              <button className="h-11 rounded-lg bg-slate-800 px-6 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-700">
                Download .AppImage
              </button>
              <button className="h-11 rounded-lg bg-slate-800 px-6 text-sm font-bold text-slate-100 transition-colors hover:bg-slate-700">
                Download .deb
              </button>
            </div>
          </article>
        </section>

        <div className="mb-24 flex justify-center">
          <Link
            className="group flex items-center gap-2 font-semibold text-primary hover:underline"
            href="https://github.com"
            target="_blank"
          >
            <AppIcon className="h-5 w-5" name="star" />
            View all releases on GitHub
            <AppIcon
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              name="arrow_forward"
            />
          </Link>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
          <h2 className="mb-12 text-center text-3xl font-bold">How to install</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              ["1", "Download", "Select the package compatible with your operating system above and wait for the download to finish."],
              ["2", "Verify Integrity", "Ensure your download is safe by checking the SHA-256 checksum against our official manifest."],
              ["3", "Install & Launch", "Run the installer or move the application to your folder. Open GraphNote and start building."],
            ].map(([step, title, text]) => (
              <article key={step} className="text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {step}
                </div>
                <h4 className="mb-2 text-lg font-bold">{title}</h4>
                <p className="text-sm text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-slate-800 bg-slate-900 py-12">
        <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="flex items-center gap-3 opacity-50">
            <div className="flex size-6 items-center justify-center rounded bg-slate-900">
              <AppIcon className="h-3.5 w-3.5 text-white" name="account_tree" />
            </div>
            <span className="text-sm font-bold">GraphNote &copy; 2024</span>
          </div>
          <div className="flex gap-8">
            <Link className="text-sm text-slate-400 transition-colors hover:text-primary" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-slate-400 transition-colors hover:text-primary" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-slate-400 transition-colors hover:text-primary" href="#">
              Security
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
