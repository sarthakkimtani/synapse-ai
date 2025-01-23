import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function ModeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth");
  }

  return <>{children}</>;
}
