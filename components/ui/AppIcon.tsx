import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  ArrowRight,
  AtSign,
  Camera,
  ChevronRight,
  CloudOff,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FilePenLine,
  FilePlus2,
  GitBranch,
  GitCommitHorizontal,
  GitCompareArrows,
  Globe,
  History,
  Info,
  Laptop,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Lock,
  Menu,
  Network,
  RefreshCw,
  Rocket,
  Search,
  Split,
  Star,
  Terminal,
  Zap,
} from "lucide-react";

type IconName =
  | "account_tree"
  | "alternate_email"
  | "arrow_forward"
  | "auto_mode"
  | "bolt"
  | "call_split"
  | "chevron_right"
  | "cloud_off"
  | "code"
  | "commit"
  | "content_copy"
  | "database"
  | "developer_board"
  | "difference"
  | "download"
  | "edit_note"
  | "fork_right"
  | "grid_view"
  | "history"
  | "info"
  | "laptop_mac"
  | "layers"
  | "lock"
  | "mediation"
  | "memory"
  | "menu"
  | "note_add"
  | "open_in_new"
  | "photo_camera"
  | "public"
  | "rocket_launch"
  | "schema"
  | "search"
  | "star"
  | "swap_calls"
  | "sync_alt"
  | "terminal";

const iconMap: Record<IconName, LucideIcon> = {
  account_tree: GitBranch,
  alternate_email: AtSign,
  arrow_forward: ArrowRight,
  auto_mode: RefreshCw,
  bolt: Zap,
  call_split: Split,
  chevron_right: ChevronRight,
  cloud_off: CloudOff,
  code: Code2,
  commit: GitCommitHorizontal,
  content_copy: Copy,
  database: Database,
  developer_board: LayoutDashboard,
  difference: GitCompareArrows,
  download: Download,
  edit_note: FilePenLine,
  fork_right: GitBranch,
  grid_view: LayoutGrid,
  history: History,
  info: Info,
  laptop_mac: Laptop,
  layers: Layers,
  lock: Lock,
  mediation: Network,
  memory: Cpu,
  menu: Menu,
  note_add: FilePlus2,
  open_in_new: ExternalLink,
  photo_camera: Camera,
  public: Globe,
  rocket_launch: Rocket,
  schema: Network,
  search: Search,
  star: Star,
  swap_calls: ArrowLeftRight,
  sync_alt: RefreshCw,
  terminal: Terminal,
};

type AppIconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export default function AppIcon({
  name,
  className,
  strokeWidth = 2,
}: AppIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
