"use client";

import { useLocale } from "@/hooks/use-localized-routes";
import { WhatsAppFloatButton } from "./whatsapp-float-button";

// Traductions statiques pour le bouton WhatsApp
const whatsappTranslations = {
  fr: {
    tooltip: "Contactez-nous sur WhatsApp",
    ariaLabel: "Contacter RentaBikeParis sur WhatsApp",
    defaultMessage:
      "Bonjour ! Je suis intéressé(e) par vos services de location de vélos et tours guidés à Paris. Pouvez-vous me renseigner ?",
  },
  en: {
    tooltip: "Contact us on WhatsApp",
    ariaLabel: "Contact RentaBikeParis on WhatsApp",
    defaultMessage:
      "Hello! I'm interested in your bike rental and guided tour services in Paris. Could you provide me with more information?",
  },
  de: {
    tooltip: "Kontaktieren Sie uns auf WhatsApp",
    ariaLabel: "Kontaktieren Sie RentaBikeParis auf WhatsApp",
    defaultMessage:
      "Hallo! Ich interessiere mich für Ihre Fahrradverleih- und Führungsdienste in Paris. Könnten Sie mir weitere Informationen geben?",
  },
  es: {
    tooltip: "Contáctanos en WhatsApp",
    ariaLabel: "Contactar RentaBikeParis en WhatsApp",
    defaultMessage:
      "¡Hola! Estoy interesado en sus servicios de alquiler de bicicletas y tours guiados en París. ¿Pueden darme más información?",
  },
  nl: {
    tooltip: "Neem contact met ons op via WhatsApp",
    ariaLabel: "Neem contact op met RentaBikeParis via WhatsApp",
    defaultMessage:
      "Hallo! Ik ben geïnteresseerd in uw fietsverhuur en rondleidingen in Parijs. Kunt u mij meer informatie geven?",
  },
} as const;

export function WhatsAppFloatButtonWrapper(): JSX.Element {
  const locale = useLocale();
  const translations = whatsappTranslations[locale] || whatsappTranslations.fr;

  return (
    <WhatsAppFloatButton
      tooltip={translations.tooltip}
      ariaLabel={translations.ariaLabel}
      defaultMessage={translations.defaultMessage}
    />
  );
}
