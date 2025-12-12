import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect based on authentication status
  if (user) {
    redirect("/app");
  } else {
    redirect("/auth/login");
  }
}

