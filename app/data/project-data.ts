export interface ProjectData {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projectList: ProjectData[] = [
  {
    id: 1,
    title: "Mobil.In",
    image: "/images/mobilin.png",
    description:
      "A stylish and mobile-friendly landing page built to showcase car showroom collections with smooth user experience.",
    tech: ["Next.js", "React", "Tailwind"],
    link: "https://mobil-in.vercel.app/",
  },
  {
    id: 2,
    title: "Evergreen",
    image: "/images/evergreen.png",
    description:
      "A real estate landing page designed to let users explore, preview, and select available housing units seamlessly.",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 3,
    title: "Movimax",
    image: "/images/movimax.png",
    description:
      "Discover and browse movies instantly with a sleek Laravel + Vue-powered API website.",
    tech: ["Laravel", "Vue", "PHP", "Tailwind", "JavaScript"],
  },
  {
    id: 4,
    title: "Food.Co",
    image: "/images/food.co.png",
    description:
      "A responsive website that helps users browse foodcourt menus and manage group orders efficiently.",
    tech: ["Laravel", "PHP", "JavaScript", "Bootstrap"],
  },
  {
    id: 5,
    title: "Gudang Cerita",
    image: "/images/gudang.png",
    description:
      "A story submission platform where writers pitch, reviewers review, and admins decide what gets published or revised — all managed with Laravel Filament.",
    tech: ["Laravel", "PHP", "HTML", "Tailwind"],
  },
  {
    id: 6,
    title: "I-Lang",
    image: "/images/ilang.png",
    description:
      "Stay updated with the latest events through a dynamic Laravel-based info hub.",
    tech: ["Laravel", "PHP", "HTML", "Bootstrap", "JavaScript"],
  },
  {
    id: 7,
    title: "Simpan.in",
    image: "/images/simpanin.png",
    description:
      "Effortlessly manage products and categories in one place — powered by Laravel.",
    tech: ["Laravel", "PHP", "HTML", "Bootstrap", "JavaScript"],
  },
  {
    id: 8,
    title: "React User App",
    image: "/images/react-user.png",
    description:
      "A minimal, responsive user management app built for speed with React and Tailwind.",
    tech: ["React", "Tailwind", "HTML", "JavaScript"],
  },
];
