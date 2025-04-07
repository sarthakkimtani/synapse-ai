"use client";

import Image from "next/image";
import { Home } from "lucide-react";
import { useChat } from "ai/react";
import { useEffect, useState, Suspense } from "react";
import { useRouter } from "nextjs-toploader/app";
import { useSearchParams } from "next/navigation";

import { ChatBubbleList } from "@/components/pages/role-play/ChatBubbleList";
import { LoadingBubble } from "@/components/pages/role-play/LoadingBubble";
import { MessageBox } from "@/components/pages/role-play/MessageBox";
import { ErrorAlert } from "@/components/pages/role-play/ErrorAlert";
import { AILoader } from "@/components/common/AILoader";
import { Button } from "@/components/ui/button";

import { enhancePromptWithParams } from "@/utils/exercise-params";
import Grid from "@/assets/grid.svg";

function ChatContent() {
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
        <p className="md:text-md mt-10 text-center text-sm text-primary">
          Synapse may make mistakes. Please use with discretion.
        </p>
        <div className="mx-auto max-w-2xl pt-8">
          <div className="space-y-6 px-4">
            <ChatBubbleList messages={messages} onClose={onClose} />
            {isLoading && <LoadingBubble />}
            {error && <ErrorAlert error={error} />}
          </div>
        </div>
      </div>
      {closed ? (
        <div className="fixed bottom-0 left-0 right-0 flex w-full flex-col items-center justify-center border-t border-zinc-800 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent backdrop-blur-xl">
          <p className="my-6 text-lg font-semibold text-white">Conversation Ended</p>
          <Button
            onClick={() => router.replace("/exercise")}
            className="text-md mb-4 bg-primary text-black hover:bg-primary/90"
          >
            <Home className="mr-2 h-5 w-5" />
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

export default function Chat() {
  return (
    <Suspense fallback={<AILoader />}>
      <ChatContent />
    </Suspense>
  );
}
