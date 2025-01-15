import { redirect } from "next/navigation";

import { ExerciseForm } from "@/components/pages/exercise/ExerciseForm";
import { AppNavbar } from "@/components/common/AppNavbar";
import { AppFooter } from "@/components/common/AppFooter";
import { Title } from "@/components/common/Title";
import { PatternFiller } from "@/components/common/PatternFiller";
import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Synapse: Chat Mode",
};

export default async function Exercise() {
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
          <span className="text-primary flex-wrap w-40 md:w-60">Intelligent</span>
          &nbsp; Language Practice for Every Learner
        </Title>
        <ExerciseForm />
      </div>
      <AppFooter />
    </div>
  );
}
