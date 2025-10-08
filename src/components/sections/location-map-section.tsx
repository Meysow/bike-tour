import Balancer from "react-wrap-balancer";

import { GoogleMap } from "@/components/shared/google-map";
import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";

export function LocationMapSection(): JSX.Element {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            <Balancer>
              Visit{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                Us
              </span>
            </Balancer>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-4">
            <Balancer>
              Come visit us at our shop in the heart of Paris. We&apos;re ready
              to help you start your adventure!
            </Balancer>
          </p>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icons.paperPlane className="size-5" />
              <span className="font-medium">{siteConfig.company.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.user className="size-5" />
              <span>{siteConfig.company.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icons.email className="size-5" />
              <span>{siteConfig.company.email}</span>
            </div>
          </div>
        </div>
        <GoogleMap address={siteConfig.company.location} />
      </div>
    </section>
  );
}
