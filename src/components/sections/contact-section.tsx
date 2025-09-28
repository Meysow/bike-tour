import Balancer from "react-wrap-balancer";

import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection(): JSX.Element {
  return (
    <section
      id="contact-section"
      aria-label="contact section"
      className="w-full pb-8 sm:pb-16 md:pb-32"
    >
      <div className="container grid max-w-4xl grid-cols-1 justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Got questions about our tours or rentals? We&apos;re here to help!
              Whether you&apos;re ready to book, need more information, or just
              want to share your thoughts, we&apos;d love to hear from you.
            </Balancer>
          </h3>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
