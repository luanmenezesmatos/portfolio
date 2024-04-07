import { type SideItem } from "@/types/sidebar";

import { UserSquare, SquareDashedKanban, GraduationCap, Mail } from "lucide-react";

export const SideItems: SideItem[] = [
  {
    title: "Sobre",
    href: "/",
    icon: UserSquare,
    side: "top",
  },
  {
    title: "Projetos",
    href: "/projetos",
    icon: SquareDashedKanban,
    side: "top",
  },
  {
    title: "Formações",
    href: "/formacoes",
    icon: GraduationCap,
    side: "top",
  },
  {
    title: "Contato",
    href: "/contato",
    icon: Mail,
    side: "bottom",
  },
];
