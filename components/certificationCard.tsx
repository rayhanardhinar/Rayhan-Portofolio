// CardImage.tsx
import { Button, Card, Image } from "@chakra-ui/react";
interface CardImageProps {
  title: string;
  image: string;
  issuer: string;
  link?: string;
}

export default function CertificationCardImage({
  title,
  image,
  issuer,
  link,
}: CardImageProps) {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      className="border border-primary-light bg-primary-dark rounded-3xl shadow-[0_0_70px_1px] shadow-primary-light/50 text-primary-light"
    >
      <Card.Body gap="2">
        <Card.Title className="font-bold text-xl text-secondary-light">
          {title}
        </Card.Title>
        <Card.Description className="text-primary-light font-semibold">
          {issuer}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2" className="flex justify-center">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          className="m-5 rounded-[10px] border border-primary-light shadow-[0_0_70px_1px] shadow-primary-light/50"
        />
      </Card.Footer>

      <div className="px-5 pb-4">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="btn-primary w-full">See Certification</Button>
          </a>
        ) : (
          ""
        )}
      </div>
    </Card.Root>
  );
}
