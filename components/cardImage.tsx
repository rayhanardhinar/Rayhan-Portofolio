// CardImage.tsx
import { Button, Card, Image } from "@chakra-ui/react";

interface CardImageProps {
  title: string;
  image: string;
  description: string;
  tech: string[];
}

const techColorMap: Record<string, string> = {
  "Next.js": "bg-black text-white",
  Tailwind: "bg-blue-400 text-white",
  Bootstrap: "bg-purple-500 text-white",
  Laravel: "bg-red-500 text-white",
  React: "bg-cyan-500 text-white",
  Vue: "bg-green-500 text-white",
  JavaScript: "bg-yellow-400 text-black",
  HTML: "bg-orange-500 text-white",
  CSS: "bg-blue-600 text-white",
};

export default function CardImage({
  title,
  image,
  description,
  tech,
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
              className={`!rounded-full !text-sm px-4 py-2 border border-white/40 ${
                techColorMap[item] || "bg-gray-400 text-white"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
      </Card.Footer>
      <Image src={image} alt={title} className="p-5 rounded-[40px]" />
    </Card.Root>
  );
}
