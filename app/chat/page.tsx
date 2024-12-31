import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Synapse: Chat Mode",
};

export default async function Chat() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth");
  }

  return <p>Hello {data.user.email}</p>;
}
