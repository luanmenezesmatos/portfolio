"use client";

import { SideItems } from "@/data/sidebar";

import { SidebarItem } from "./sidebar-item";

import { BookMinus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SidebarNav() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <BookMinus className="size-5" />
        </Button>
      </div>

        {/* <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg bg-muted"
              aria-label="Playground"
            >
              <SquareTerminal className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Playground
          </TooltipContent>
        </Tooltip> */}

        <SidebarItem items={SideItems} />
    </aside>
  );
}
