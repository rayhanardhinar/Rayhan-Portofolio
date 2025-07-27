// CardImage.tsx
import { Button, Card, Image } from "@chakra-ui/react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiHtml5,
  SiPhp,
} from "react-icons/si";
interface CardImageProps {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
}

const techIconMap: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs className="w-5 h-5 text-white" />,
  Tailwind: <SiTailwindcss className="w-5 h-5 text-sky-400" />,
  Bootstrap: <SiBootstrap className="w-5 h-5 text-purple-600" />,
  Laravel: <SiLaravel className="w-5 h-5 text-red-500" />,
  React: <SiReact className="w-5 h-5 text-cyan-400" />,
  Vue: <SiVuedotjs className="w-5 h-5 text-green-500" />,
  JavaScript: <SiJavascript className="w-5 h-5 text-yellow-400" />,
  HTML: <SiHtml5 className="w-5 h-5 text-orange-500" />,
  PHP: <SiPhp className="w-5 h-5 text-blue-500" />,
};

export default function ProjectCardImage({
  title,
  image,
  description,
  tech,
  link,
}: CardImageProps) {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      className="border border-primary-light bg-transparent rounded-3xl shadow-[0_0_70px_1px] shadow-primary-light/50 text-primary-light"
    >
      <Card.Body gap="2">
        <Card.Title className="font-bold text-xl text-secondary-light">
          {title}
        </Card.Title>
        <Card.Description className="text-white/70">
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <Button
              key={index}
              title={item}
              className="!rounded-full p-2 border border-white/40"
            >
              {techIconMap[item]}
            </Button>
          ))}
        </div>
      </Card.Footer>

      <Image
        loading="lazy"
        src={image}
        alt={title}
        className="m-5 rounded-[10px] border border-primary-light shadow-[0_0_70px_1px] shadow-primary-light/50"
      />
      <div className="px-5 pb-4">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="btn-primary w-full">See Live</Button>
          </a>
        ) : (
          ""
        )}
      </div>
    </Card.Root>
  );
}
