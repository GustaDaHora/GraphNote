import Link from "next/link";
import AppIcon from "@/components/ui/AppIcon";
import DocsHeader from "@/components/ui/DocsHeader";

const navBlocks = [
  {
    title: "Getting Started",
    items: [
      ["download", "Installation"],
      ["rocket_launch", "First Project"],
      ["note_add", "Creating Pages"],
      ["commit", "Commits"],
    ],
  },
  {
    title: "Core Concepts",
    items: [
      ["photo_camera", "Snapshots"],
      ["difference", "Diff"],
      ["fork_right", "Branches"],
    ],
  },
  {
    title: "Version Engine",
    items: [
      ["memory", "Internal"],
      ["database", "Persistence"],
      ["code", "Rust"],
    ],
  },
  {
    title: "Architecture",
    items: [
      ["layers", "Layers"],
      ["swap_calls", "Data Flow"],
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100">
      <DocsHeader />

      <div className="mx-auto flex w-full max-w-[1600px]">
        <aside className="sticky top-[65px] hidden h-[calc(100vh-65px)] w-72 overflow-y-auto border-r border-slate-800 p-8 lg:block">
          <nav className="space-y-8">
            {navBlocks.map((block) => (
              <div key={block.title}>
                <h5 className="mb-4 text-xs font-bold uppercase tracking-widest">
                  {block.title}
                </h5>
                <ul className="space-y-2">
                  {block.items.map(([icon, label], index) => (
                    <li key={label}>
                      <a
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                          block.title === "Getting Started" && index === 0
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-slate-300 hover:text-white"
                        }`}
                        href="#"
                      >
                        <AppIcon className="h-4 w-4" name={icon as "download" | "rocket_launch" | "note_add" | "commit" | "photo_camera" | "difference" | "fork_right" | "memory" | "database" | "code" | "layers" | "swap_calls"} />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-6 py-12 lg:px-16 xl:px-24">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link className="hover:text-primary" href="/docs">
              Docs
            </Link>
            <AppIcon className="h-3 w-3" name="chevron_right" />
            <a className="hover:text-primary" href="#">
              Getting Started
            </a>
            <AppIcon className="h-3 w-3" name="chevron_right" />
            <span className="font-medium text-slate-100">Installation</span>
          </nav>

          <article className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-black tracking-tight">
              Getting Started
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300">
              Welcome to GraphNote. This guide will help you install the core
              engine and set up your first local knowledge graph.
            </p>
            <div className="mb-10 h-px w-full bg-slate-800" />

            <section className="mb-10" id="prerequisites">
              <h2 className="mb-4 text-2xl font-bold">Prerequisites</h2>
              <p className="mb-6 leading-relaxed">
                Before installing GraphNote, ensure you have the following
                requirements met on your system:
              </p>
              <ul className="mb-8 list-disc space-y-2 pl-6">
                <li>Rust v1.70 or higher installed via `rustup`</li>
                <li>A minimum of 4GB RAM for large graph processing</li>
                <li>Git for version control features</li>
              </ul>
            </section>

            <section className="mb-10" id="installation">
              <h2 className="mb-4 text-2xl font-bold">Installation</h2>
              <p className="mb-6 leading-relaxed">
                The easiest way to get started is by using our command-line
                interface. Run the following command in your terminal:
              </p>
              <div className="relative my-8">
                <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-sm leading-6 text-slate-100">
                  <code>curl -fsSL https://get.graphnote.dev | sh</code>
                </pre>
                <button className="absolute right-3 top-3 rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-400 transition-colors hover:text-white">
                  <AppIcon className="h-4 w-4" name="content_copy" />
                </button>
              </div>
            </section>

            <section className="mb-10" id="configuration">
              <h2 className="mb-4 text-2xl font-bold">Initial Configuration</h2>
              <p className="mb-6 leading-relaxed">
                After installation, initialize your first GraphNote directory.
                This will create a hidden `.graphnote` folder containing your
                persistence layer settings.
              </p>
              <div className="my-8 rounded-r-xl border-l-4 border-primary bg-primary/5 p-6">
                <div className="flex gap-4">
                  <AppIcon className="h-5 w-5 text-primary" name="info" />
                  <div>
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
                      Tip
                    </p>
                    <p className="text-slate-300">
                      You can customize the persistence engine to use S3 or a
                      local SQLite database in the config file.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12" id="next-steps">
              <h2 className="mb-4 text-2xl font-bold">Next Steps</h2>
              <p className="mb-12 leading-relaxed">
                Now that you have the engine installed, you&apos;re ready to
                create your first project and explore the data flow architecture.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <a
                  className="group rounded-xl border border-slate-800 p-6 transition-all hover:border-primary"
                  href="#"
                >
                  <h4 className="mb-2 font-bold transition-colors group-hover:text-primary">
                    First Project &rarr;
                  </h4>
                  <p className="text-sm text-slate-400">
                    Learn how to scaffold your first graph structure.
                  </p>
                </a>
                <a
                  className="group rounded-xl border border-slate-800 p-6 transition-all hover:border-primary"
                  href="#"
                >
                  <h4 className="mb-2 font-bold transition-colors group-hover:text-primary">
                    Core Concepts &rarr;
                  </h4>
                  <p className="text-sm text-slate-400">
                    Understand snapshots, diffs and branches.
                  </p>
                </a>
              </div>
            </section>
          </article>

          <footer className="mt-24 flex justify-between border-t border-slate-800 pt-8 text-sm text-slate-400">
            <p>&copy; 2024 GraphNote Engine. Distributed under MIT License.</p>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#">
                Twitter
              </a>
              <a className="hover:text-white" href="#">
                Discord
              </a>
            </div>
          </footer>
        </main>

        <aside className="sticky top-[65px] hidden h-[calc(100vh-65px)] w-64 p-8 xl:block">
          <div className="mb-4">
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest">
              On this page
            </h5>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  className="block border-l-2 border-primary pl-4 font-medium text-primary"
                  href="#prerequisites"
                >
                  Prerequisites
                </a>
              </li>
              <li>
                <a className="block pl-4 text-slate-400 transition-colors hover:text-white" href="#installation">
                  Installation
                </a>
              </li>
              <li>
                <a className="block pl-4 text-slate-400 transition-colors hover:text-white" href="#configuration">
                  Initial Configuration
                </a>
              </li>
              <li>
                <a className="block pl-4 text-slate-400 transition-colors hover:text-white" href="#next-steps">
                  Next Steps
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 rounded-xl bg-slate-800/50 p-6">
            <p className="mb-2 text-xs font-bold uppercase text-slate-100">
              Community
            </p>
            <p className="mb-4 text-sm leading-snug text-slate-400">
              Have questions? Join our community forum for help.
            </p>
            <button className="flex w-full items-center justify-center gap-2 text-xs font-bold text-primary">
              Open Discord
              <AppIcon className="h-4 w-4" name="open_in_new" />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
