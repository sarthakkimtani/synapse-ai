"use client";

import Image from "next/image";
import { Home } from "lucide-react";
import { useChat } from "ai/react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { ChatBubbleList } from "@/components/pages/role-play/ChatBubbleList";
import { LoadingBubble } from "@/components/pages/role-play/LoadingBubble";
import { MessageBox } from "@/components/pages/role-play/MessageBox";
import { ErrorAlert } from "@/components/pages/role-play/ErrorAlert";
import { Button } from "@/components/ui/button";

import { enhancePromptWithParams } from "@/utils/exercise-params";
import Grid from "@/assets/grid.svg";

export default function Chat() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const { messages, input, handleInputChange, handleSubmit, append, isLoading, error } = useChat();
  const [closed, setClosed] = useState<boolean>(false);

  useEffect(() => {
    const prompt = `Start Role-Play mode in '${lang}' as the target language now.`;
    const enhancedPrompt = enhancePromptWithParams(prompt);
    const addInitialMessage = async () => await append({ content: enhancedPrompt, role: "user" });
    addInitialMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClose = () => setClosed(true);

  return (
    <main className="relative min-h-screen">
      <Image src={Grid} className="-z-10 object-cover" fill alt="Grid" />
      <div className="pb-32">
        <p className="text-primary mt-10 text-sm md:text-md text-center">
          Synapse may make mistakes. Please use with discretion.
        </p>
        <div className="max-w-2xl mx-auto pt-8">
          <div className="space-y-6 px-4">
            <ChatBubbleList messages={messages} onClose={onClose} />
            {isLoading && <LoadingBubble />}
            {error && <ErrorAlert error={error} />}
          </div>
        </div>
      </div>
      {closed ? (
        <div className="flex flex-col items-center justify-center w-full fixed bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent backdrop-blur-xl border-t border-zinc-800">
          <p className="text-white text-lg font-semibold my-6">Conversation Ended</p>
          <Button
            onClick={() => router.replace("/exercise")}
            className="bg-primary text-black hover:bg-primary/90 text-md mb-4"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
        </div>
      ) : (
        <MessageBox
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </main>
  );
}
