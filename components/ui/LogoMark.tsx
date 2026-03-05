import Link from "next/link";
import AppIcon from "./AppIcon";

type LogoMarkProps = {
  href?: string;
  size?: "sm" | "md";
};

export default function LogoMark({ href = "/", size = "md" }: LogoMarkProps) {
  const boxClass = size === "sm" ? "size-6 text-xs" : "size-8 text-sm";
  const textClass = size === "sm" ? "text-base" : "text-xl";

  return (
    <Link className="flex items-center gap-3" href={href}>
      <div
        className={`${boxClass} rounded-md bg-primary text-white flex items-center justify-center`}
      >
        <AppIcon className="h-4 w-4" name="account_tree" />
      </div>
      <span className={`${textClass} font-bold tracking-tight`}>GraphNote</span>
    </Link>
  );
}
