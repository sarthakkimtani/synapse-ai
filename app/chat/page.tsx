import { redirect } from "next/navigation";

import { ChatForm } from "@/components/pages/chat/ChatForm";
import { AppNavbar } from "@/components/common/AppNavbar";
import { AppFooter } from "@/components/common/AppFooter";
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
        <h1 className="text-3xl md:text-5xl px-4 font-bold text-center flex flex-wrap justify-center items-center mt-24 mb-20">
          Master&nbsp;
          <span className="text-primary w-40 md:w-60"> Languages </span>
          &nbsp;&nbsp; Through Conversations
        </h1>
        <ChatForm />
      </div>
      <AppFooter />
    </div>
  );
}
