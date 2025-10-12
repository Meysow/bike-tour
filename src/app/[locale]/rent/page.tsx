import { RentPageContent } from "@/components/pages/rent-page-content";
import { generatePageMetadata } from "@/lib/utils/metadata";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => generatePageMetadata(params, "rent");

export default function RentPage(): JSX.Element {
  return <RentPageContent />;
}
