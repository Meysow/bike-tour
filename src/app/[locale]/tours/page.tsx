import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";
import { GoogleMap } from "@/components/shared/google-map";
import { Icons } from "@/components/shared/icons";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/utils/metadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => generatePageMetadata(params, "tours");

export default function ToursPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background mt-20 banner:mt-28">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-primary/25 to-transparent opacity-30 rounded-full blur-lg h-[85%] w-[75%] mx-auto" />
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <Balancer>
                  Discover our{" "}
                  <span className="relative bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text font-extrabold text-transparent">
                    Wholesome Tours
                  </span>
                </Balancer>
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl sm:leading-8">
                <Balancer>
                  Join us on unforgettable bike tours through the heart of
                  Paris. Explore iconic landmarks, discover hidden gems, and
                  experience the city like a true Parisian with our expert local
                  guides.
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        {/* Tour 1 - All around Paris */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      Paris Guided Bike Tour
                    </span>
                  </div>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>All around Paris by Bike</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      From €40
                    </span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    With our Paris Guided Bike Tour, discovering the capital
                    becomes child&apos;s play! This cycling itinerary is
                    accessible to all levels. We offer a unique mix of our top
                    spots, typical Parisian streets and the city&apos;s most
                    emblematic landmarks. Ideal for those who want to discover
                    the heart of Paris and its great monuments. The programme
                    includes discovering both banks of the Seine!
                  </Balancer>
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Your guide will tell you fascinating and often amusing
                    stories about the history of Paris. The atmosphere is just
                    right. All you have to do is let yourself be guided and
                    enjoy this magnificent bike ride to discover Paris. Get
                    ready for this exciting adventure! 🚴‍♂️
                  </Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Tour Highlights</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Louvre Museum & Tuileries Garden
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Notre-Dame Cathedral
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Latin Quarter & Saint-Germain
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Champs-Élysées & Arc de Triomphe
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Eiffel Tower & Seine River
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Practical Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">Starting Point</div>
                          <div className="text-sm text-muted-foreground">
                            20 Rue Greneta, 75002 Paris
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">Duration & Distance</div>
                          <div className="text-sm text-muted-foreground">
                            3 Hours - 12 kilometers
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📅</span>
                        <div>
                          <div className="font-medium">Availability</div>
                          <div className="text-sm text-muted-foreground">
                            Every day - 10:30 am / 2:30 pm departures
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🚴</span>
                        <div>
                          <div className="font-medium">Bike Options</div>
                          <div className="text-sm text-muted-foreground">
                            Your choice of bike type
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📝</span>
                        <div>
                          <div className="font-medium">Booking</div>
                          <div className="text-sm text-muted-foreground">
                            Reserve at least 1 day in advance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Pricing</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        Child&apos;s Bike
                      </div>
                      <div className="text-2xl font-bold text-primary">€35</div>
                    </div>
                    <div className="p-4 rounded-lg border border-primary bg-primary/5">
                      <div className="text-sm text-muted-foreground mb-1">
                        Pedal Bike
                      </div>
                      <div className="text-2xl font-bold text-primary">€40</div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        Electric Bike
                      </div>
                      <div className="text-2xl font-bold text-primary">€50</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Optional: Helmet and/or basket available upon request
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90">
                    Book This Tour
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="Paris bike tour - All around Paris"
                  src="/images/hero/louvre.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tour 2 - Canal Saint-Martin */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-2">
                <Image
                  alt="Canal Saint-Martin bike tour"
                  src="/images/hero/palais-royal.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <div className="space-y-6 lg:order-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      Authentic Paris Experience
                    </span>
                  </div>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>Canal Saint-Martin Discovery Tour</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      From €35
                    </span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    Get ready to discover my favorite hidden gem in Paris! 🚴‍♂️
                    This Canal Saint-Martin tour takes you away from the tourist
                    crowds to explore the bohemian heart of the 10th and 11th
                    arrondissements. We&apos;ll cruise along the picturesque
                    canal, pass through its iconic locks, and soak up the
                    vibrant local atmosphere that makes this neighborhood so
                    special.
                  </Balancer>
                </p>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    I&apos;ll share fascinating stories about the area&apos;s
                    transformation while we discover hidden cafés and artisan
                    shops. This is Paris as the locals live it! Perfect for
                    those seeking an authentic, off-the-beaten-path adventure.
                    ✨
                  </Balancer>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Tour Highlights</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Canal Saint-Martin & Its Locks
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Romantic Iron Footbridges
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Trendy Cafés & Boutiques
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Place de la République
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Hidden Courtyards & Street Art
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Practical Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🌍</span>
                        <div>
                          <div className="font-medium">Starting Point</div>
                          <div className="text-sm text-muted-foreground">
                            20 Rue Greneta, 75002 Paris
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⏰</span>
                        <div>
                          <div className="font-medium">Duration & Distance</div>
                          <div className="text-sm text-muted-foreground">
                            2.5 Hours - 10 kilometers
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📅</span>
                        <div>
                          <div className="font-medium">Availability</div>
                          <div className="text-sm text-muted-foreground">
                            Every day - 10:30 am / 2:30 pm departures
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🚴</span>
                        <div>
                          <div className="font-medium">Bike Options</div>
                          <div className="text-sm text-muted-foreground">
                            Your choice of bike type
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📝</span>
                        <div>
                          <div className="font-medium">Booking</div>
                          <div className="text-sm text-muted-foreground">
                            Reserve at least 1 day in advance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Pricing</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        Child&apos;s Bike
                      </div>
                      <div className="text-2xl font-bold text-primary">€35</div>
                    </div>
                    <div className="p-4 rounded-lg border border-primary bg-primary/5">
                      <div className="text-sm text-muted-foreground mb-1">
                        Pedal Bike
                      </div>
                      <div className="text-2xl font-bold text-primary">€40</div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">
                        Electric Bike
                      </div>
                      <div className="text-2xl font-bold text-primary">€50</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Optional: Helmet and/or basket available upon request
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90">
                    Book This Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Tours Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-fuchsia-400/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      Private Tours
                    </span>
                  </div>
                  <h2 className="font-urbanist text-4xl font-bold tracking-tight sm:text-5xl">
                    <Balancer>Private Tours, Team Buildings, Events</Balancer>
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      Custom Quote
                    </span>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  <Balancer>
                    At Rentabike Paris, we like to adapt and cater to your
                    needs! Whether you&apos;re seeking to create a personalized
                    tour, organize a team-building event, or add a special touch
                    to your event, we are open to all possibilities and eagerly
                    await your inquiries!
                  </Balancer>
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Let&apos;s bring your vision to life
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        We welcome inquiries for customizing tours based on
                        specific interests, durations, and group sizes.
                        Let&apos;s explore Paris your way through a personalized
                        itinerary designed just for you.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Additionally, we specialize in curating exceptional
                        experiences for corporate outings and team-building
                        activities. Engage your team in an exciting adventure,
                        combining exploration, team bonding, and unforgettable
                        memories.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        We are here to assist you every step of the way, from
                        initial planning to seamless execution.
                      </span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic">
                    We value open communication and encourage you to get in
                    touch with us to discuss your ideas, preferences, and any
                    special requirements you may have. We are excited to
                    collaborate and make your vision a reality! 💫🚴🏻‍♂️
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button className="h-12 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90">
                    Contact Us
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="Private tours and team building events"
                  src="/images/hero/prive.jpg"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              <Balancer>Ready to explore Paris by bike?</Balancer>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              <Balancer>
                All our tours include professional guides, quality bikes, and
                unforgettable memories. Book your adventure today!
              </Balancer>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold tracking-wide bg-gradient-to-r from-primary to-fuchsia-400 hover:from-primary/90 hover:to-fuchsia-400/90"
              >
                Book a Tour Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold tracking-wide"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Meeting Point Map */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-fuchsia-400/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-urbanist text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                <Balancer>
                  Meeting{" "}
                  <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                    Point
                  </span>
                </Balancer>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-4">
                <Balancer>
                  All our tours start from our shop. Come 15 minutes early for
                  bike fitting and safety briefing!
                </Balancer>
              </p>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icons.paperPlane className="size-5" />
                  <span className="font-medium">
                    {siteConfig.company.location}
                  </span>
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
      </div>
      <Footer />
      <WhatsAppFloatButtonWrapper />
    </>
  );
}
