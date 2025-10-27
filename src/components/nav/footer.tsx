"use client";

import {
  EnvelopeClosedIcon,
  PaperPlaneIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

import Logo from "../../../public/images/logo/logo.png";

import { siteConfig } from "@/config/site";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { Icons } from "../shared/icons";

export function Footer(): JSX.Element {
  const { createLink } = useLocalizedRoutes();
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-fuchsia-400/10 rounded-2xl mx-6 mb-6 shadow">
      <div className="max-w-screen-xl px-6 pt-12 pb-6 mx-auto sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="hidden sm:flex items-center lg:flex-col lg:items-start lg:gap-4">
            <Image
              src={Logo}
              alt="RentaBikeParis Logo"
              width={192}
              height={192}
              className="h-28 w-auto md:h-36 lg:h-48 flex-shrink-0 -mt-3 object-contain"
            />
            <p className="max-w-md mx-auto  sm:text-left text-muted-foreground">
              Discover Paris on two wheels! Our bike rental and guided tours
              offer an unforgettable way to see the city, tailored to all
              experience levels.
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly gap-8 sm:grid sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
            <div className="text-left">
              <p className="text-lg font-medium border-l-4 border-primary pl-4">
                Follow Us
              </p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm pl-4">
                  <li>
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icons.facebook className="size-5" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icons.instagram className="size-5" />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.links.tripadvisor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icons.tripadvisor className="size-5" />
                      <span>TripAdvisor</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-lg font-medium border-l-4 border-primary pl-4">
                Our Services
              </p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm pl-4">
                  <li>
                    <a
                      href={createLink("rent")}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-lg leading-none">🚲</span>
                      <span>Bike Rentals</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={createLink("tours")}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-lg leading-none">🗺️</span>
                      <span>Guided Tours</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={createLink("about")}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-lg leading-none">👋</span>
                      <span>About Us</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-lg font-medium border-l-4 border-primary pl-4">
                Contact Us
              </p>
              <ul className="mt-8 space-y-4 text-sm text-muted-foreground ">
                <li className="flex gap-2">
                  <EnvelopeClosedIcon className="size-5" />
                  <span>{siteConfig.company.email}</span>
                </li>
                <li className="flex gap-2">
                  <PersonIcon className="size-5" />
                  <span>{siteConfig.company.phone}</span>
                </li>
                <li className="flex gap-2">
                  <PaperPlaneIcon className="size-5" />
                  <span>{siteConfig.company.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span>All rights reserved. </span>
              <a
                href={createLink("terms")}
                className="text-accent-foreground hover:text-primary"
              >
                Terms & Conditions{" "}
              </a>
              &middot;
              <a
                href={createLink("privacy")}
                className="text-accent-foreground hover:text-primary"
              >
                Privacy Policy
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              &copy; 2024 Bike Tours Paris
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
