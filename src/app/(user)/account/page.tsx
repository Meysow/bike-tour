import auth from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();

  // If the user is not authenticated, redirect to login
  if (!session) {
    redirect("/signin");
  }

  // If authenticated, render the account page content
  return (
    <div>
      <h1>Welcome to your account, {session.user.name}</h1>
      {/* Add more user account related content here */}
    </div>
  );
}
