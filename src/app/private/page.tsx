import auth from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return <p>Hello {session.user.email}</p>;
}
