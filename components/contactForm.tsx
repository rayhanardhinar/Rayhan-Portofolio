import { Button, Field, Fieldset, Input, Textarea } from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <Fieldset.Root size="md" maxW="lg">
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input name="name" className="bg-primary-light/20 px-2 rounded-lg" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input
            name="email"
            type="email"
            className="bg-primary-light/20 px-2 rounded-lg"
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>What can I help you with?</Field.Label>
          <Textarea
            name="text"
            className="bg-primary-light/20 px-2 rounded-lg"
            rows={4}
          />
        </Field.Root>

        <Field.Root className="pt-4">
          <Button type="submit" className="btn-primary w-full ">
            Submit
          </Button>
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
}
