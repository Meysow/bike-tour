import auth from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const session = await auth();

  // If the user is not authenticated, redirect to login
  if (!session) {
    redirect("/signin");
  }

  // If authenticated but the user is not an admin, redirect to a 403 page
  if (session.user.role !== "ADMIN") {
    redirect("/403");
  }

  // If authenticated and an admin, render the admin dashboard
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      {/* Add admin-specific content here */}
    </div>
  );
}
