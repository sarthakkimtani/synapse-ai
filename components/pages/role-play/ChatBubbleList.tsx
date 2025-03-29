import { Message } from "ai";
import Image from "next/image";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

import Synapse from "@/assets/synapse.svg";
import { useEffect } from "react";

export const ChatBubbleList = ({
  messages,
  onClose,
}: {
  messages: Message[];
  onClose: () => void;
}) => {
  const extractTranslation = (content: string) => {
    const translationMatch = content.match(/<TRANSLATE>([\s\S]*?)<\/TRANSLATE>/);
    const originalText = content
      .replace(/<TRANSLATE>.*?<\/TRANSLATE>/, "")
      .replace(/<END>/, "")
      .trim();

    return {
      original: originalText,
      translation: translationMatch ? translationMatch[1].trim() : null,
    };
  };

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.content.includes("<END>")) {
        onClose();
      }
    }
  }, [messages, onClose]);

  return (
    <TooltipProvider>
      {messages.slice(1).map((m) => {
        const { original, translation } =
          m.role === "assistant"
            ? extractTranslation(m.content)
            : { original: m.content, translation: null };

        if (m.role === "system" || original.length === 0) return null;
        return (
          <div
            key={m.id}
            className={cn(
              "flex gap-3 text-sm sm:text-base",
              m.role === "user" ? "justify-end" : "items-start justify-start"
            )}
          >
            {m.role === "assistant" && (
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                <Image
                  src={Synapse}
                  alt="synapse"
                  draggable={false}
                  className="h-4 w-4 text-zinc-400"
                />
              </div>
            )}
            <div
              className={cn(
                "group max-w-[85%] rounded-2xl px-4 py-2 animate-in slide-in-from-bottom-2",
                m.role === "user"
                  ? "bg-primary text-zinc-900"
                  : "bg-zinc-800 text-white shadow-[inset_0px_0px_5px_rgba(255,225,153,0.25)]"
              )}
            >
              {m.role === "assistant" && translation ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="prose dark:prose-invert group break-words">
                      <span className="inline-flex items-center gap-2 p-1 leading-7 underline decoration-zinc-500 decoration-dashed underline-offset-8 md:leading-8">
                        {original}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    className="w-full border-transparent bg-[#FEF9EC] p-2 text-sm text-black backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-md font-medium">{translation}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div className="prose dark:prose-invert break-words">{original}</div>
              )}
            </div>
          </div>
        );
      })}
    </TooltipProvider>
  );
};
