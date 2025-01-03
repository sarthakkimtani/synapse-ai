import { redirect } from "next/navigation";

import { Title } from "@/components/common/Title";
import { AppNavbar } from "@/components/common/AppNavbar";
import { AppFooter } from "@/components/common/AppFooter";
import { PatternFiller } from "@/components/common/PatternFiller";
import { VoiceForm } from "@/components/pages/voice/VoiceForm";
import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Synapse: Voice Mode",
};

export default async function Voice() {
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
          Voice you way to&nbsp;
          <span className="text-primary w-40 md:w-60">Language</span>
          &nbsp;Mastery
        </Title>
        <VoiceForm />
      </div>
      <AppFooter />
    </div>
  );
}
