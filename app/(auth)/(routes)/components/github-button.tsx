import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function GithubButton() {
  return (
    <form
      className="grid gap-2"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/admin" });
      }}
    >
      <Button type="submit">Signin with GitHub</Button>
    </form>
  );
}
