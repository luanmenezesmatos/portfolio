import { type LucideIcon } from "lucide-react";

export interface SideItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  side: "top" | "bottom";
}
