import { ExerciseForm } from "@/components/pages/exercise/ExerciseForm";
import { AppNavbar } from "@/components/common/AppNavbar";
import { AppFooter } from "@/components/common/AppFooter";
import { Title } from "@/components/common/Title";
import { PatternFiller } from "@/components/common/PatternFiller";

export const metadata = {
  title: "Synapse: Practice using Exercises",
};

export default async function Exercise() {
  return (
    <div className="relative min-h-screen">
      <PatternFiller />
      <AppNavbar className="px-6 md:px-20 py-6 md:py-8" />
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
