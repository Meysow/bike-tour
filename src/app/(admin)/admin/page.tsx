import auth from "@/lib/auth";

export default async function AdminPage() {
  const session = await auth();

  if (!session || !session.user) {
    return <div>Not Logged in</div>;
  }

  if (session.user.role === "USER") {
    return <div>USER</div>;
  }

  if (session.user.role === "ADMIN") {
    return <div>admin</div>;
  }

  return <div>welcome in</div>;
}
