import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButton } from "@/components/shared/whatsapp-float-button";
import { siteConfig } from "@/config/site";

export default function PrivacyPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 banner:mt-28">
        {/* Hero Section with Banner */}
        <section className="relative py-20 md:py-32 min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cgu/cgu.jpg"
              alt="Privacy Policy"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                <Balancer>{siteConfig.legal.privacyTitle}</Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-white/95 sm:text-xl sm:leading-8 drop-shadow-md">
                <Balancer>
                  En vigueur au {siteConfig.legal.effectiveDate}
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                La présente Politique de Confidentialité décrit la façon dont{" "}
                {siteConfig.company.name} collecte, utilise et protège vos
                informations personnelles lorsque vous utilisez notre site web{" "}
                {siteConfig.url} et nos services de location de vélos et de
                visites guidées.
              </p>

              {/* Article 1 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 1 : Informations collectées
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-xl font-semibold text-foreground">
                    1.1 Informations que vous nous fournissez
                  </h3>
                  <p>
                    Nous collectons les informations personnelles que vous nous
                    fournissez volontairement lorsque vous :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Réservez une location de vélo ou une visite guidée</li>
                    <li>Créez un compte sur notre site</li>
                    <li>Nous contactez par email, téléphone ou WhatsApp</li>
                    <li>Vous inscrivez à notre newsletter</li>
                    <li>Laissez un avis ou témoignage</li>
                  </ul>
                  <p>Ces informations peuvent inclure :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                    <li>Informations de paiement</li>
                    <li>
                      Préférences concernant les visites et locations de vélos
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6">
                    1.2 Informations collectées automatiquement
                  </h3>
                  <p>
                    Lorsque vous visitez notre site, nous collectons
                    automatiquement certaines informations, notamment :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Adresse IP et informations sur votre appareil (type
                      d&apos;appareil, navigateur, système d&apos;exploitation)
                    </li>
                    <li>Pages visitées et durée des visites</li>
                    <li>Données de navigation et de clics</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>
              </div>

              {/* Article 2 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 2 : Utilisation des informations
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nous utilisons vos informations personnelles pour les
                    finalités suivantes :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Gestion des réservations :</strong> Traiter vos
                      réservations de vélos et de visites guidées, vous envoyer
                      des confirmations et des rappels
                    </li>
                    <li>
                      <strong>Communication :</strong> Répondre à vos questions,
                      demandes d&apos;information et réclamations
                    </li>
                    <li>
                      <strong>Marketing :</strong> Vous envoyer des newsletters,
                      promotions et offres spéciales (avec votre consentement)
                    </li>
                    <li>
                      <strong>Amélioration du service :</strong> Analyser
                      l&apos;utilisation de notre site pour améliorer nos
                      services et votre expérience utilisateur
                    </li>
                    <li>
                      <strong>Sécurité :</strong> Prévenir la fraude et assurer
                      la sécurité de nos services
                    </li>
                    <li>
                      <strong>Obligations légales :</strong> Respecter nos
                      obligations légales et réglementaires
                    </li>
                  </ul>
                </div>
              </div>

              {/* Article 3 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 3 : Partage des informations
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nous ne vendons ni ne louons vos informations personnelles à
                    des tiers. Nous pouvons partager vos informations dans les
                    cas suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Prestataires de services :</strong> Nous pouvons
                      partager vos informations avec des prestataires de
                      services tiers qui nous aident à fournir nos services
                      (traitement des paiements, hébergement web, services
                      marketing)
                    </li>
                    <li>
                      <strong>Partenaires commerciaux :</strong> Avec votre
                      consentement, nous pouvons partager vos informations avec
                      nos partenaires pour des offres spéciales
                    </li>
                    <li>
                      <strong>Obligations légales :</strong> Si requis par la
                      loi, une ordonnance du tribunal, ou pour protéger nos
                      droits
                    </li>
                    <li>
                      <strong>Transfert d&apos;entreprise :</strong> En cas de
                      fusion, acquisition ou vente d&apos;actifs
                    </li>
                  </ul>
                </div>
              </div>

              {/* Article 4 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 4 : Cookies et technologies similaires
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Notre site utilise des cookies et des technologies
                    similaires pour améliorer votre expérience. Les cookies sont
                    de petits fichiers texte stockés sur votre appareil.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Types de cookies utilisés :
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Cookies essentiels :</strong> Nécessaires au
                      fonctionnement du site (gestion de session, sécurité)
                    </li>
                    <li>
                      <strong>Cookies de performance :</strong> Pour analyser
                      l&apos;utilisation du site et améliorer ses performances
                    </li>
                    <li>
                      <strong>Cookies de fonctionnalité :</strong> Pour
                      mémoriser vos préférences (langue, région)
                    </li>
                    <li>
                      <strong>Cookies marketing :</strong> Pour vous proposer du
                      contenu personnalisé et des publicités ciblées
                    </li>
                  </ul>
                  <p>
                    Vous pouvez contrôler et gérer les cookies via les
                    paramètres de votre navigateur. Notez que la désactivation
                    de certains cookies peut affecter la fonctionnalité du site.
                  </p>
                </div>
              </div>

              {/* Article 5 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 5 : Sécurité des données
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nous mettons en œuvre des mesures de sécurité techniques et
                    organisationnelles appropriées pour protéger vos
                    informations personnelles contre tout accès non autorisé,
                    perte, destruction ou divulgation.
                  </p>
                  <p>Ces mesures incluent :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Chiffrement SSL/TLS pour les transmissions de données
                    </li>
                    <li>
                      Accès restreint aux données personnelles aux seuls
                      employés autorisés
                    </li>
                    <li>Sauvegardes régulières des données</li>
                    <li>Mise à jour régulière de nos systèmes de sécurité</li>
                  </ul>
                  <p>
                    Cependant, aucune méthode de transmission sur Internet ou de
                    stockage électronique n&apos;est totalement sécurisée. Nous
                    ne pouvons donc garantir une sécurité absolue.
                  </p>
                </div>
              </div>

              {/* Article 6 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 6 : Vos droits (RGPD)
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Conformément au Règlement Général sur la Protection des
                    Données (RGPD), vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Droit d&apos;accès :</strong> Vous pouvez demander
                      une copie de vos données personnelles
                    </li>
                    <li>
                      <strong>Droit de rectification :</strong> Vous pouvez
                      demander la correction de données inexactes ou incomplètes
                    </li>
                    <li>
                      <strong>Droit à l&apos;effacement :</strong> Vous pouvez
                      demander la suppression de vos données dans certaines
                      conditions
                    </li>
                    <li>
                      <strong>Droit à la limitation du traitement :</strong>{" "}
                      Vous pouvez demander la limitation du traitement de vos
                      données
                    </li>
                    <li>
                      <strong>Droit à la portabilité :</strong> Vous pouvez
                      demander le transfert de vos données à un autre
                      prestataire
                    </li>
                    <li>
                      <strong>Droit d&apos;opposition :</strong> Vous pouvez
                      vous opposer au traitement de vos données à des fins de
                      marketing
                    </li>
                    <li>
                      <strong>Droit de retirer votre consentement :</strong>{" "}
                      Vous pouvez retirer votre consentement à tout moment
                    </li>
                  </ul>
                  <p>
                    Pour exercer ces droits, veuillez nous contacter à
                    l&apos;adresse : {siteConfig.company.email}
                  </p>
                  <p>
                    Vous avez également le droit de déposer une plainte auprès
                    de la Commission Nationale de l&apos;Informatique et des
                    Libertés (CNIL) si vous estimez que vos droits ne sont pas
                    respectés.
                  </p>
                </div>
              </div>

              {/* Article 7 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 7 : Conservation des données
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nous conservons vos informations personnelles aussi
                    longtemps que nécessaire pour :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir nos services</li>
                    <li>Respecter nos obligations légales</li>
                    <li>Résoudre les litiges</li>
                    <li>Appliquer nos accords</li>
                  </ul>
                  <p>
                    Les données de réservation sont généralement conservées
                    pendant 3 ans après la dernière transaction. Les données
                    marketing sont conservées jusqu&apos;à votre désinscription
                    ou retrait de consentement.
                  </p>
                </div>
              </div>

              {/* Article 8 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 8 : Liens vers des sites tiers
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Notre site peut contenir des liens vers des sites web de
                    tiers (réseaux sociaux, partenaires). Nous ne sommes pas
                    responsables des pratiques de confidentialité de ces sites.
                    Nous vous encourageons à lire les politiques de
                    confidentialité de ces sites avant de leur fournir des
                    informations personnelles.
                  </p>
                </div>
              </div>

              {/* Article 9 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 9 : Modifications de la politique
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nous pouvons modifier cette Politique de Confidentialité de
                    temps à autre pour refléter les changements dans nos
                    pratiques ou pour d&apos;autres raisons opérationnelles,
                    légales ou réglementaires.
                  </p>
                  <p>
                    Nous vous informerons de tout changement important en
                    publiant la nouvelle politique sur cette page et en mettant
                    à jour la date d&apos;entrée en vigueur. Nous vous
                    encourageons à consulter régulièrement cette page.
                  </p>
                </div>
              </div>

              {/* Article 10 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Article 10 : Mineurs
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Nos services ne sont pas destinés aux personnes de moins de
                    16 ans. Nous ne collectons pas sciemment d&apos;informations
                    personnelles auprès de mineurs. Si vous êtes parent ou
                    tuteur et que vous pensez que votre enfant nous a fourni des
                    informations personnelles, veuillez nous contacter.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-12 bg-muted/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Nous contacter
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Pour toute question concernant cette Politique de
                    Confidentialité ou pour exercer vos droits, vous pouvez nous
                    contacter :
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Par email :</strong> {siteConfig.company.email}
                    </p>
                    <p>
                      <strong>Par téléphone :</strong> +33{" "}
                      {siteConfig.company.phone}
                    </p>
                    <p>
                      <strong>Par courrier :</strong>
                    </p>
                    <p className="pl-4">
                      {siteConfig.company.name}
                      <br />
                      {siteConfig.company.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Dernière mise à jour : {siteConfig.legal.effectiveDate}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
