import { redirect } from "next/navigation";

import { ChatForm } from "@/components/pages/chat/ChatForm";
import { AppNavbar } from "@/components/common/AppNavbar";
import { AppFooter } from "@/components/common/AppFooter";
import { Title } from "@/components/common/Title";
import { PatternFiller } from "@/components/common/PatternFiller";
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

  return (
    <div className="relative min-h-screen">
      <PatternFiller />
      <AppNavbar />
      <div className="flex flex-col items-center justify-center">
        <Title>
          Master&nbsp;
          <span className="text-primary w-40 md:w-60"> Languages </span>
          &nbsp;&nbsp; Through Conversations
        </Title>
        <ChatForm />
      </div>
      <AppFooter />
    </div>
  );
}
