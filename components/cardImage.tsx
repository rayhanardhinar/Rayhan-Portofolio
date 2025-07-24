// CardImage.tsx
import { Button, Card, Image, Text } from "@chakra-ui/react";

interface CardImageProps {
  title: string;
  image: string;
  description: string;
}

export default function CardImage({
  title,
  image,
  description,
}: CardImageProps) {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      className="border border-primary-light bg-transparent rounded-3xl shadow-2xl shadow-primary-light/70 text-primary-light"
    >
      <Image src={image} alt={title} />
      <Card.Body gap="2">
        <Card.Title className="font-bold">{title}</Card.Title>
        <Card.Description className="text-white/70">
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button className="btn-primary">Live view</Button>
        <Button className="btn-secondary">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
}
