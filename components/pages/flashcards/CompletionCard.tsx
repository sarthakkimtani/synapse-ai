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
      className="w-full max-w-md mx-auto"
    >
      <Card className="bg-[#171817] text-white rounded-3xl shadow-lg border-gray-900">
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <PartyPopper className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-center">Exercise Completed!</h2>
          <div className="text-center space-y-2">
            <p className="mb-8">
              You got {correct} out of {total} cards correct
            </p>
            <Button
              onClick={() => router.replace("/exercise")}
              className="w-full bg-primary text-black hover:bg-primary/90 h-12 text-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
