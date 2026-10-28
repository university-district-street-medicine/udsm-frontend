import { ServiceProps } from "@/components/ServicesCard";

export interface Service extends ServiceProps {
  id: number;
}

export const servicesData: Service[] = [
  {
    id: 1,
    name: "Conversations about health",
    caption: "Nonjudgmental conversations about health, guided by what community members want to talk about.",
    imageUrl: "/placeholder.png"
  },
  {
    id: 2,
    name: "Navigating care and resources",
    caption: "Helping people understand their options and connect with services, on their own terms.",
    imageUrl: "/placeholder.png"
  },
  {
    id: 3,
    name: "Supplies and basic care",
    caption: "Hygiene items, material supplies, and basic care, offered freely and without conditions.",
    imageUrl: "/placeholder.png"
  },
  {
    id: 4,
    name: "Learning through service",
    caption: "Our student volunteers learn alongside neighbors, preceptors, and partners, building skills for relationship-centered careers.",
    imageUrl: "/placeholder.png"
  }
];
