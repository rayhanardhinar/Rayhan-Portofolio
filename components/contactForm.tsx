import { Button, Field, Fieldset, Input, Textarea } from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Fieldset.Root size="md" maxW="lg">
      <Fieldset.Content>
        <Field.Root>
          <Field.Label className="text-primary-dark">Name</Field.Label>
          <Input name="name" className="bg-primary-dark/20 px-2 rounded-lg" />
        </Field.Root>

        <Field.Root>
          <Field.Label className="text-primary-dark">Email address</Field.Label>
          <Input
            name="email"
            type="email"
            className="bg-primary-dark/20 px-2 rounded-lg"
          />
        </Field.Root>

        <Field.Root>
          <Field.Label className="text-primary-dark">
            What can I help you with?
          </Field.Label>
          <Textarea
            name="text"
            className="bg-primary-dark/20 px-2 rounded-lg"
            rows={4}
          />
        </Field.Root>

        <Field.Root className="pt-4">
          <Button
            type="submit"
            className="bg-primary-dark rounded-lg text-primary-light w-full hover:bg-primary-dark/70 hover:text-primary-dark"
          >
            Send
          </Button>
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
}
