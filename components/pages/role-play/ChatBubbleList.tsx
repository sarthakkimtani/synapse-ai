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
              m.role === "user" ? "justify-end" : "justify-start items-start"
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
                "rounded-2xl px-4 py-2 max-w-[85%] animate-in slide-in-from-bottom-2 group",
                m.role === "user"
                  ? "bg-primary text-zinc-900"
                  : "bg-zinc-800 text-white shadow-[inset_0px_0px_5px_rgba(255,225,153,0.25)]"
              )}
            >
              {m.role === "assistant" && translation ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="prose break-words dark:prose-invert group">
                      <span className="underline decoration-dashed underline-offset-8 decoration-zinc-500 p-1 leading-7 md:leading-8 inline-flex items-center gap-2">
                        {original}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    className="bg-[#FEF9EC] border-transparent text-black text-sm backdrop-blur-sm p-2 w-full"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-md font-medium">{translation}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div className="prose break-words dark:prose-invert">{original}</div>
              )}
            </div>
          </div>
        );
      })}
    </TooltipProvider>
  );
};
