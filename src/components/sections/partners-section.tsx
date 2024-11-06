import Link from "next/link";

import { PartnersStack } from "@/data/partners-stack";

import { Icons } from "@/components/icons";

export function PartnersSection(): JSX.Element {
  return (
    <section
      id="partners-section"
      aria-label="partners section"
      className="hidden w-full bg-background py-8 sm:grid"
    >
      <div className="container flex w-full max-w-4xl flex-wrap place-items-center items-center justify-center gap-6 sm:gap-[38px] md:gap-[36px] lg:gap-x-12">
        {PartnersStack.map((partner) => {
          const Icon = Icons[partner.icon as keyof typeof Icons];

          return (
            <Link
              key={partner.title}
              href={partner.href}
              target="_blank"
              rel="noreferer"
              className="transition-all duration-200 ease-out hover:opacity-70"
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
