export interface ProjectData {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
}

export const projectList: ProjectData[] = [
  {
    id: 1,
    title: "Furniture Landing Page",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    description: "A responsive landing page for modern furniture brands.",
    tech: ["Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "Food Ordering App",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1770&q=80",
    description: "An intuitive UI/UX for ordering food in a foodcourt.",
    tech: ["Vue", "Tailwind"],
  },
  {
    id: 3,
    title: "Inventory Dashboard",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1770&q=80",
    description: "Admin dashboard for inventory management with Laravel.",
    tech: ["Laravel", "JavaScript", "Tailwind"],
  },
  {
    id: 4,
    title: "Furniture Landing Page",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    description: "A responsive landing page for modern furniture brands.",
    tech: ["Laravel", "Bootstrap"],
  },
  {
    id: 5,
    title: "Food Ordering App",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1770&q=80",
    description: "An intuitive UI/UX for ordering food in a foodcourt.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Inventory Dashboard",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1770&q=80",
    description: "Admin dashboard for inventory management with Laravel.",
    tech: ["Laravel", "Tailwind"],
  },
];
