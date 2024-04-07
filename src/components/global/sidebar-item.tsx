"use client";

import Link from "next/link";

import { type SideItem } from "@/types/sidebar";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { BookMinus } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

interface SidebarProps {
  items: SideItem[];
}

export function SidebarItem({ items }: SidebarProps) {
  const path = usePathname();
  
  return (
    <>
      <nav className="grid gap-1 p-2">
        {items
          .filter((item) => item.side === "top")
          .map((item) => (
            <TooltipProvider key={item.title}>
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link
                    className={cn(
                      "rounded-lg",
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      path === item.href && "bg-neutral-100"
                    )}
                    href={item.href}
                    aria-label={item.title}
                  >
                    {item.icon && <item.icon className="size-5" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  {item.title}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
      </nav>

      <nav className="mt-auto grid gap-1 p-2">
        {items
          .filter((item) => item.side === "bottom")
          .map((item) => (
            <TooltipProvider key={item.title}>
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link
                    className={cn(
                      "rounded-lg",
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      path === item.href ? "bg-primary-500" : "bg-muted"
                    )}
                    href={item.href}
                    aria-label={item.title}
                  >
                    {item.icon && <item.icon className="size-5" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  {item.title}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
      </nav>
    </>
  );
}
