import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </>
  );
}
