import Link from "next/link";
import MarketingFooter from "@/components/ui/MarketingFooter";
import MarketingHeader from "@/components/ui/MarketingHeader";
import AppIcon from "@/components/ui/AppIcon";

export default function Home() {
  return (
    <div className="bg-background-dark text-slate-100">
      <MarketingHeader
        navItems={[
          { href: "#features", label: "Features" },
          { href: "#technical", label: "Technical" },
          { href: "/docs", label: "Docs" },
        ]}
      />

      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              NOW IN PUBLIC BETA
            </div>

            <h1 className="mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent md:text-7xl">
              GraphNote
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              A local-first knowledge workspace with visual version control.
              Build your personal second brain with the power of git-like
              branching and history.
            </p>

            <div className="mb-16 flex flex-col gap-4 sm:flex-row">
              <Link
                className="flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-lg font-bold text-white transition-transform hover:scale-[1.02]"
                href="/download"
              >
                <AppIcon className="h-5 w-5" name="download" />
                Download for Desktop
              </Link>
              <Link
                className="flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-8 text-lg font-bold"
                href="https://github.com"
                target="_blank"
              >
                <AppIcon className="h-5 w-5" name="star" />
                Star on GitHub
              </Link>
            </div>

            <div className="group relative aspect-video w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 p-4 opacity-50">
                <div className="col-span-3 row-span-6 rounded-lg bg-slate-700" />
                <div className="col-span-9 row-span-4 rounded-lg bg-slate-600" />
                <div className="col-span-9 row-span-2 rounded-lg bg-slate-700" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <AppIcon className="h-14 w-14 text-slate-600" name="developer_board" />
              </div>
              <div className="absolute bottom-10 left-10 right-10 rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-sm font-mono text-slate-400">
                    commit: 7f3a21 - Added visual node connections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/50 px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              &quot;Note-taking tools don&apos;t show how your knowledge
              evolves.&quot;
            </h2>
            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-primary" />
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                Our Solution
              </h3>
              <h2 className="text-3xl font-bold">Rethinking the Editor</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: "history",
                  title: "Visual History",
                  text: "Every change is tracked in a beautiful node-based graph. See exactly when and how your ideas merged over time.",
                },
                {
                  icon: "difference",
                  title: "Integrated Diff",
                  text: "Compare versions side-by-side with semantic diffing that understands your Markdown structure, not just raw text.",
                },
                {
                  icon: "cloud_off",
                  title: "Offline-First",
                  text: "Your data stays on your machine. Encrypted, local-first architecture ensures speed and privacy without compromise.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-primary/50"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <AppIcon className="h-5 w-5" name={item.icon as "history" | "difference" | "cloud_off"} />
                  </div>
                  <h4 className="mb-4 text-xl font-bold">{item.title}</h4>
                  <p className="leading-relaxed text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950/30 px-6 py-24" id="features">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-16 md:flex-row">
              <div className="w-full md:w-1/2">
                <h2 className="mb-8 text-4xl font-bold">
                  Power Features for Knowledge Workers
                </h2>
                <ul className="space-y-6">
                  {[
                    ["edit_note", "Markdown Editor", "Full-featured rich-text Markdown editing with live preview."],
                    ["schema", "Visual Commit Graph", "Navigate your notes through time with an interactive git-style graph."],
                    ["auto_mode", "Automatic Snapshots", "Don't worry about saving. We create intelligent checkpoints while you work."],
                    ["call_split", "Branches", "Experiment with ideas on separate branches before merging into your main vault."],
                    ["database", "100% Local", "Pure file-based storage. You own the files, you own the graph."],
                  ].map(([icon, title, text]) => (
                    <li key={title} className="flex items-start gap-4">
                      <AppIcon
                        className="mt-0.5 h-5 w-5 text-primary"
                        name={
                          icon as
                            | "edit_note"
                            | "schema"
                            | "auto_mode"
                            | "call_split"
                            | "database"
                        }
                      />
                      <div>
                        <h5 className="font-bold">{title}</h5>
                        <p className="text-slate-300">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
                <div className="flex aspect-square items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-8">
                  <div className="text-center">
                    <AppIcon className="mx-auto mb-4 h-12 w-12 text-primary" name="mediation" />
                    <p className="text-sm font-bold">Graph Engine</p>
                  </div>
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-primary p-8 text-white">
                  <div className="text-center">
                    <AppIcon className="mx-auto mb-4 h-12 w-12" name="lock" />
                    <p className="text-sm font-bold">Privacy Core</p>
                  </div>
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-slate-900 p-8 text-white">
                  <div className="text-center">
                    <AppIcon className="mx-auto mb-4 h-12 w-12" name="bolt" />
                    <p className="text-sm font-bold">Fast Rust Core</p>
                  </div>
                </div>
                <div className="flex aspect-square items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-8">
                  <div className="text-center">
                    <AppIcon className="mx-auto mb-4 h-12 w-12 text-primary" name="sync_alt" />
                    <p className="text-sm font-bold">Local Sync</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 px-6 py-24" id="technical">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                  Under the Hood
                </h3>
                <h2 className="text-4xl font-bold">Built for Performance</h2>
              </div>
              <p className="max-w-md text-slate-300">
                GraphNote is engineered for stability, speed, and long-term data
                preservation.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Tauri + Rust", "Lightweight native performance with a minimal security footprint."],
                ["02", "React UI", "Fluid, highly-responsive user interface for seamless note taking."],
                ["03", "SQLite", "Industrial-grade local database for incredibly fast graph queries."],
                ["04", "Local-first", "CRDT-inspired data model designed to work seamlessly offline."],
              ].map(([index, title, text]) => (
                <article
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-8"
                >
                  <div className="mb-4 font-mono text-sm text-primary">{index}</div>
                  <h5 className="mb-2 text-lg font-bold">{title}</h5>
                  <p className="text-sm text-slate-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">
              Ready to evolve your knowledge?
            </h2>
            <p className="mb-12 text-lg opacity-90">
              Join the local-first movement. Download GraphNote today for
              Windows, macOS, and Linux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary transition-colors hover:bg-slate-100"
                href="/download"
              >
                Download Now
              </Link>
              <Link
                className="rounded-xl border border-white/30 bg-primary/20 px-8 py-4 text-lg font-bold transition-colors hover:bg-primary/30"
                href="/docs"
              >
                Read the Docs
              </Link>
              <Link
                className="rounded-xl border border-white/30 bg-primary/20 px-8 py-4 text-lg font-bold transition-colors hover:bg-primary/30"
                href="https://github.com"
                target="_blank"
              >
                View GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
