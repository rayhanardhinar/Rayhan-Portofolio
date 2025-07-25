// CardImage.tsx
import { Button, Card, Image } from "@chakra-ui/react";

interface CardImageProps {
  title: string;
  image: string;
  description: string;
  tech: string[];
}

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
            <Button key={index} className="btn-secondary !rounded-full">
              {item}
            </Button>
          ))}
        </div>
      </Card.Footer>
      <Image src={image} alt={title} className="p-5 rounded-[40px]" />
    </Card.Root>
  );
}
