import { Icons } from "../icons";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-accent rounded-2xl mx-6 mb-6">
      <div className="max-w-screen-xl px-4 pt-12 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="hidden sm:flex items-center lg:flex-col lg:items-start lg:gap-4">
            <Icons.bike className="size-28 md:size-36 lg:size-48 flex-shrink-0 -mt-3" />
            <p className="max-w-md mx-auto  sm:text-left">
              Discover Paris on two wheels! Our bike rental and guided tours
              offer an unforgettable way to see the city, tailored to all
              experience levels.
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly gap-8 sm:grid sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
            <div className="text-left">
              <p className="text-lg font-medium ">Usefull links</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="/about" className=" hover:text-fuchsia-400">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="/team" className=" hover:text-fuchsia-400">
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className=" hover:text-fuchsia-400">
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-lg font-medium ">Our Services</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="/rentals" className=" hover:text-fuchsia-400">
                      Bike Rentals
                    </a>
                  </li>
                  <li>
                    <a href="/tours" className=" hover:text-fuchsia-400">
                      Guided Tours
                    </a>
                  </li>

                  <li>
                    <a href="/gear" className=" hover:text-fuchsia-400">
                      Cycling Gear
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex gap-2">
                  <Icons.email className="size-5" />
                  <span>contact@biketours.com</span>
                </li>
                <li className="flex gap-2">
                  <Icons.user className="size-5" />
                  <span>+33 1 234 5678</span>
                </li>
                <li className="flex gap-2">
                  <Icons.paperPlane className="size-5" />
                  <span>123 Avenue, Paris, France</span>
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
                href="/terms"
                className="text-accent-foreground hover:text-fuchsia-400"
              >
                Terms & Conditions{" "}
              </a>
              &middot;
              <a
                href="/privacy"
                className="text-accent-foreground hover:text-fuchsia-400"
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
