import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { WhatsAppFloatButton } from "@/components/shared/whatsapp-float-button";
import { siteConfig } from "@/config/site";

export default function TermsPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 banner:mt-28">
        {/* Hero Section with Banner */}
        <section className="relative py-20 md:py-32 min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cgu/cgu.jpg"
              alt="Bike symbol on wet asphalt"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                <Balancer>{siteConfig.legal.cguTitle}</Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-white/95 sm:text-xl sm:leading-8 drop-shadow-md">
                <Balancer>
                  En vigueur au {siteConfig.legal.effectiveDate}
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Les présentes conditions générales d&apos;utilisation (dites «
                CGU ») ont pour objet l&apos;encadrement juridique des modalités
                de mise à disposition du site et des services par Rentabike
                Paris et de définir les conditions d&apos;accès et
                d&apos;utilisation des services par « l&apos;Utilisateur ».
              </p>

              <p className="text-lg leading-8 text-muted-foreground mb-12">
                Les présentes CGU sont accessibles sur le site à la rubrique
                «CGU».
              </p>

              <div className="space-y-12">
                {/* Article 1 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    Article 1 : Les mentions légales
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      L&apos;édition et la direction de la publication du site{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>{" "}
                      est assurée par <strong>{siteConfig.company.name}</strong>
                      , domicilié au{" "}
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          siteConfig.company.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.address}
                      </a>
                      .
                    </p>
                    <p>
                      <strong>Numéro de téléphone</strong>{" "}
                      <a
                        href={`tel:${siteConfig.company.phone}`}
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.phone}
                      </a>{" "}
                      <strong>Adresse e-mail</strong>{" "}
                      <a
                        href={`mailto:${siteConfig.company.email}`}
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.email}
                      </a>
                    </p>
                    <p>
                      L&apos;hébergeur du site{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>{" "}
                      est la société{" "}
                      <strong>{siteConfig.hosting.company}</strong>, dont le
                      siège social est situé au{" "}
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          siteConfig.hosting.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.hosting.address}
                      </a>
                      , avec le <strong>numéro de téléphone</strong> :{" "}
                      <a
                        href={`tel:${siteConfig.hosting.phone}`}
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.hosting.phone}
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Article 2 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    ARTICLE 2 : Accès au site
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Le site{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>{" "}
                      permet à l&apos;Utilisateur un{" "}
                      <strong>accès gratuit</strong> aux services suivants : Le
                      site internet propose les services suivants :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Location de vélo, visites guidées</strong>
                      </li>
                    </ul>
                    <p>
                      Le site est accessible gratuitement en tout lieu à tout
                      Utilisateur ayant un accès à Internet. Tous les frais
                      supportés par l&apos;Utilisateur pour accéder au service
                      (matériel informatique, logiciels, connexion Internet,
                      etc.) sont à sa charge.
                    </p>
                  </div>
                </div>

                {/* Article 3 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    ARTICLE 3 : Collecte des données
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Le site est{" "}
                      <strong>
                        exempté de déclaration à la Commission Nationale
                        Informatique et Libertés (CNIL)
                      </strong>{" "}
                      dans la mesure où il ne collecte{" "}
                      <strong>aucune donnée</strong> concernant les
                      Utilisateurs.
                    </p>
                  </div>
                </div>

                {/* Article 4 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    ARTICLE 4 : Propriété intellectuelle
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Les <strong>marques, logos, signes</strong> ainsi que tous
                      les contenus du site (textes, images, son…) font
                      l&apos;objet d&apos;une{" "}
                      <strong>
                        protection par le Code de la propriété intellectuelle
                      </strong>{" "}
                      et plus particulièrement par le{" "}
                      <strong>droit d&apos;auteur</strong>.
                    </p>
                    <p>
                      L&apos;Utilisateur doit{" "}
                      <strong>solliciter l&apos;autorisation préalable</strong>{" "}
                      du site pour toute reproduction, publication, copie des
                      différents contenus. Il s&apos;engage à une utilisation
                      des contenus du site dans un{" "}
                      <strong>cadre strictement privé</strong>, toute
                      utilisation à des fins{" "}
                      <strong>
                        commerciales et publicitaires est strictement interdite
                      </strong>
                      .
                    </p>
                    <p>
                      Toute représentation totale ou partielle de ce site par
                      quelque procédé que ce soit, sans l&apos;autorisation
                      expresse de l&apos;exploitant du site Internet
                      constituerait une
                      <strong>
                        contrefaçon sanctionnée par l&apos;article L 335-2
                      </strong>{" "}
                      et suivants du Code de la propriété intellectuelle.
                    </p>
                    <p>
                      Il est rappelé conformément à l&apos;
                      <strong>article L122-5</strong> du Code de propriété
                      intellectuelle que l&apos;Utilisateur qui reproduit, copie
                      ou publie le contenu protégé doit{" "}
                      <strong>citer l&apos;auteur et sa source</strong>.
                    </p>
                  </div>
                </div>

                {/* Article 5 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    ARTICLE 5 : Responsabilité
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Les sources des informations diffusées sur le site{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>{" "}
                      sont réputées <strong>fiables</strong> mais le site ne
                      garantit pas qu&apos;il soit exempt de{" "}
                      <strong>
                        défauts, d&apos;erreurs ou d&apos;omissions
                      </strong>
                      .
                    </p>
                    <p>
                      Les informations communiquées sont présentées à titre
                      <strong>
                        {" "}
                        indicatif et général sans valeur contractuelle
                      </strong>
                      . Malgré des mises à jour régulières, le site{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>{" "}
                      ne peut être tenu responsable de la modification des
                      dispositions administratives et juridiques survenant après
                      la publication. De même, le site ne peut être tenue
                      responsable de l&apos;utilisation et de
                      l&apos;interprétation de l&apos;information contenue dans
                      ce site.
                    </p>
                    <p>
                      Le site{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>{" "}
                      ne peut être tenu pour responsable d&apos;
                      <strong>éventuels virus</strong> qui pourraient infecter
                      l&apos;ordinateur ou tout matériel informatique de
                      l&apos;Internaute, suite à une utilisation, à
                      l&apos;accès, ou au téléchargement provenant de ce site.
                    </p>
                    <p>
                      La responsabilité du site ne peut être engagée en cas de
                      <strong> force majeure</strong> ou du fait{" "}
                      <strong>imprévisible et insurmontable</strong>
                      d&apos;un tiers.
                    </p>
                  </div>
                </div>

                {/* Article 6 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    ARTICLE 6 : Liens hypertextes
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Des <strong>liens hypertextes</strong> peuvent être
                      présents sur le site. L&apos;Utilisateur est informé
                      qu&apos;en cliquant sur ces liens, il
                      <strong> sortira du site</strong>{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>
                      . Ce dernier n&apos;a <strong>pas de contrôle</strong> sur
                      les pages web sur lesquelles aboutissent ces liens et ne
                      saurait, en aucun cas, être responsable de leur contenu.
                    </p>
                  </div>
                </div>

                {/* Article 7 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    ARTICLE 7 : Cookies
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      L&apos;Utilisateur est informé que lors de ses visites sur
                      le site, un{" "}
                      <strong>
                        cookie peut s&apos;installer automatiquement
                      </strong>{" "}
                      sur son logiciel de navigation.
                    </p>
                    <p>
                      Les <strong>cookies</strong> sont de petits fichiers
                      stockés temporairement sur le disque dur de
                      l&apos;ordinateur de l&apos;Utilisateur par votre
                      navigateur et qui sont{" "}
                      <strong>nécessaires à l&apos;utilisation</strong>
                      du site{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>
                      . Les cookies{" "}
                      <strong>
                        ne contiennent pas d&apos;information personnelle
                      </strong>
                      et ne peuvent pas être utilisés pour identifier
                      quelqu&apos;un. Un cookie contient un{" "}
                      <strong>
                        identifiant unique, généré aléatoirement et donc anonyme
                      </strong>
                      . Certains cookies expirent à la fin de la visite de
                      l&apos;Utilisateur, d&apos;autres restent.
                    </p>
                    <p>
                      L&apos;information contenue dans les cookies est utilisée
                      pour
                      <strong> améliorer le site</strong>{" "}
                      <a
                        href={siteConfig.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 underline font-bold"
                      >
                        {siteConfig.company.website}
                      </a>
                      .
                    </p>
                    <p>
                      <strong>
                        En naviguant sur le site, L&apos;Utilisateur les
                        accepte.
                      </strong>
                    </p>
                    <p>
                      L&apos;Utilisateur pourra{" "}
                      <strong>désactiver ces cookies</strong> par
                      l&apos;intermédiaire des paramètres figurant au sein de
                      son logiciel de navigation.
                    </p>
                  </div>
                </div>

                {/* Article 8 */}
                <div>
                  <h2 className="font-urbanist text-3xl font-bold tracking-tight mb-6">
                    ARTICLE 8 : Droit applicable et juridiction compétente
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      La <strong>législation française</strong> s&apos;applique
                      au présent contrat. En cas d&apos;absence de résolution
                      amiable d&apos;un litige né entre les parties, les{" "}
                      <strong>
                        tribunaux français seront seuls compétents
                      </strong>{" "}
                      pour en connaître. Pour toute question relative à
                      l&apos;application des présentes CGU, vous pouvez joindre
                      l&apos;éditeur aux coordonnées inscrites à l&apos;
                      <strong>ARTICLE 1</strong>.
                    </p>
                  </div>
                </div>
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
