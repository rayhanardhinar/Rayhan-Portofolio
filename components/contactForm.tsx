"use client";

import { Button, Field, Fieldset, Input, Textarea } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Di sini kamu bisa lakukan pengiriman data ke email/API, dst.
    // Misalnya: emailjs/sendGrid/fetch ke server kamu

    toaster.create({
      type: "success",
      title: "Message sent.",
      description: "I'll be back to you soon!",
      duration: 5000,
    });

    // Optionally reset form
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root
        size="md"
        maxW="lg"
        className="mx-auto bg-primary-light/10 p-6 rounded-xl shadow-xl backdrop-blur"
      >
        <Fieldset.Content className="flex flex-col gap-5">
          {/* Name */}
          <Field.Root>
            <Field.Label className="text-primary-dark font-semibold">
              Name
            </Field.Label>
            <Input
              name="name"
              required
              className="bg-white/30 backdrop-blur text-primary-dark px-4 py-2 rounded-lg shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-dark/60"
              placeholder="Your name"
            />
          </Field.Root>

          {/* Email */}
          <Field.Root>
            <Field.Label className="text-primary-dark font-semibold">
              Email address
            </Field.Label>
            <Input
              name="email"
              type="email"
              required
              className="bg-white/30 backdrop-blur text-primary-dark px-4 py-2 rounded-lg shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-dark/60"
              placeholder="you@example.com"
            />
          </Field.Root>

          {/* Message */}
          <Field.Root>
            <Field.Label className="text-primary-dark font-semibold">
              What can I help you with?
            </Field.Label>
            <Textarea
              name="message"
              required
              rows={4}
              className="bg-white/30 backdrop-blur text-primary-dark px-4 py-2 rounded-lg shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-dark/60 resize-none"
              placeholder="Type your message here..."
            />
          </Field.Root>

          {/* Submit Button */}
          <Field.Root className="pt-2">
            <Button
              type="submit"
              className="bg-primary-dark text-primary-light font-semibold w-full py-2 rounded-lg transition-all duration-300 hover:bg-primary-dark/80 hover:text-white shadow-md"
            >
              Send Message
            </Button>
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </form>
  );
}
