"use client";

import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/shared/icons";

export function InfoBanner(): JSX.Element {
  return (
    <div className="hidden lg:block w-full bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Contact Information */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6">
          {/* Phone */}
          <Link
            href={`tel:${siteConfig.company.phone}`}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <span className="text-base">☞</span>
            <span>Call us:</span>
            <span className="font-medium">{siteConfig.company.phone}</span>
          </Link>

          {/* Hours */}
          <div className="flex items-center gap-1.5">
            <span className="text-base">☞</span>
            <span>Hours of Operation:</span>
            <span className="font-medium">10:00 am - 19:00 pm</span>
          </div>

          {/* Email */}
          <Link
            href={`mailto:${siteConfig.company.email}`}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <span className="text-base">☞</span>
            <span>E-mail:</span>
            <span className="font-medium">{siteConfig.company.email}</span>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <InstagramLogoIcon className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link
            href={siteConfig.links.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="TripAdvisor"
          >
            <Icons.tripadvisor className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
