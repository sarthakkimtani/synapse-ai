"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Home, PartyPopper } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CompletionCard = ({ correct, total }: { correct: number; total: number }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-md"
    >
      <Card className="rounded-3xl border-gray-900 bg-[#171817] text-white shadow-lg">
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <PartyPopper className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-center text-3xl font-bold">Exercise Completed!</h2>
          <div className="space-y-2 text-center">
            <p className="mb-8">
              You got {correct} out of {total} cards correct
            </p>
            <Button
              onClick={() => router.replace("/exercise")}
              className="h-12 w-full bg-primary text-lg text-black hover:bg-primary/90"
            >
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
