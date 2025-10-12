"use client";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { cn } from "@/lib/utils";
import { BikeIcon, HomeIcon, MapIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const TRANSLATIONS = {
  fr: {
    title: "Oups ! Vous avez pris un mauvais virage",
    subtitle:
      "Ne vous inquiétez pas ! Même les meilleurs cyclistes se perdent parfois à Paris. Cette page n'existe pas ou a été déplacée.",
    description:
      "Mais l'aventure ne s'arrête pas là ! Retournons ensemble sur le bon chemin et découvrons les merveilles de Paris. 🚴‍♂️",
    errorCode: "Erreur 404 - Page non trouvée",
    buttons: {
      home: "Retour à l'accueil",
      tours: "Visites guidées",
      rent: "Location de vélos",
      contact: "Nous contacter",
    },
    suggestion: "Besoin d'aide pour trouver votre chemin ?",
  },
  en: {
    title: "Oops! You took a wrong turn",
    subtitle:
      "Don't worry! Even the best cyclists get lost in Paris sometimes. This page doesn't exist or has been moved.",
    description:
      "But the adventure doesn't stop there! Let's get back on the right path together and discover the wonders of Paris. 🚴‍♂️",
    errorCode: "Error 404 - Page not found",
    buttons: {
      home: "Back to home",
      tours: "Guided tours",
      rent: "Bike rentals",
      contact: "Contact us",
    },
    suggestion: "Need help finding your way?",
  },
  de: {
    title: "Hoppla! Sie sind falsch abgebogen",
    subtitle:
      "Keine Sorge! Selbst die besten Radfahrer verirren sich manchmal in Paris. Diese Seite existiert nicht oder wurde verschoben.",
    description:
      "Aber das Abenteuer endet hier nicht! Lassen Sie uns gemeinsam auf den richtigen Weg zurückkehren und die Wunder von Paris entdecken. 🚴‍♂️",
    errorCode: "Fehler 404 - Seite nicht gefunden",
    buttons: {
      home: "Zurück zur Startseite",
      tours: "Geführte Touren",
      rent: "Fahrradverleih",
      contact: "Kontakt",
    },
    suggestion: "Brauchen Sie Hilfe, Ihren Weg zu finden?",
  },
  es: {
    title: "¡Vaya! Has tomado un giro equivocado",
    subtitle:
      "¡No te preocupes! Incluso los mejores ciclistas se pierden en París a veces. Esta página no existe o ha sido movida.",
    description:
      "¡Pero la aventura no termina aquí! Volvamos juntos al camino correcto y descubramos las maravillas de París. 🚴‍♂️",
    errorCode: "Error 404 - Página no encontrada",
    buttons: {
      home: "Volver al inicio",
      tours: "Tours guiados",
      rent: "Alquiler de bicicletas",
      contact: "Contactarnos",
    },
    suggestion: "¿Necesitas ayuda para encontrar tu camino?",
  },
  nl: {
    title: "Oeps! U heeft een verkeerde afslag genomen",
    subtitle:
      "Geen zorgen! Zelfs de beste fietsers verdwalen soms in Parijs. Deze pagina bestaat niet of is verplaatst.",
    description:
      "Maar het avontuur stopt hier niet! Laten we samen teruggaan naar het juiste pad en de wonderen van Parijs ontdekken. 🚴‍♂️",
    errorCode: "Fout 404 - Pagina niet gevonden",
    buttons: {
      home: "Terug naar home",
      tours: "Rondleidingen",
      rent: "Fietsverhuur",
      contact: "Contact opnemen",
    },
    suggestion: "Hulp nodig om uw weg te vinden?",
  },
} as const;

export default function NotFound() {
  const { locale, createLink } = useLocalizedRoutes();
  const t = TRANSLATIONS[locale] || TRANSLATIONS.fr;

  return (
    <>
      <Header />
      <div className="container flex min-h-[calc(100vh-200px)] flex-col items-center justify-center py-12 md:py-20 mt-20 banner:mt-28">
        {/* Background gradient effect */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/10 to-transparent opacity-30 rounded-full blur-3xl h-[50%] w-[60%] mx-auto" />

        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          {/* Error code badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <BikeIcon className="h-4 w-4" />
            <span>{t.errorCode}</span>
          </div>

          {/* Main title */}
          <h1 className="animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl">
            <Balancer>{t.title}</Balancer>
          </h1>

          {/* Large 404 number with bike icon */}
          <div className="relative my-8">
            <div className="text-[150px] font-bold text-primary/10 leading-none select-none">
              404
            </div>
            <BikeIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-primary animate-pulse" />
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            <Balancer>{t.subtitle}</Balancer>
          </p>

          {/* Description */}
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            <Balancer>{t.description}</Balancer>
          </p>

          {/* Call to action */}
          <p className="mt-4 text-sm font-semibold text-foreground">
            {t.suggestion}
          </p>

          {/* Navigation buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={createLink("home")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 transition-all duration-300 hover:-translate-y-1"
              )}
            >
              <HomeIcon className="h-4 w-4" />
              {t.buttons.home}
            </Link>

            <Link
              href={createLink("tours")}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 transition-all duration-300 hover:-translate-y-1"
              )}
            >
              <MapIcon className="h-4 w-4" />
              {t.buttons.tours}
            </Link>

            <Link
              href={createLink("rent")}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 transition-all duration-300 hover:-translate-y-1"
              )}
            >
              <BikeIcon className="h-4 w-4" />
              {t.buttons.rent}
            </Link>
          </div>

          {/* Contact link */}
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <PhoneIcon className="h-4 w-4" />
            <span>
              {t.suggestion}{" "}
              <Link
                href={createLink("about")}
                className="font-semibold text-primary hover:underline"
              >
                {t.buttons.contact}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
