import { Send } from "lucide-react";
import { ChatRequestOptions } from "ai";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface MessageBoxProps {
  input: string;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isLoading: boolean;
}

export const MessageBox = ({
  input,
  handleSubmit,
  handleInputChange,
  isLoading,
}: MessageBoxProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent backdrop-blur-xl">
      <div className="mx-auto max-w-2xl p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 animate-in fade-in-5">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Respond to Conversation..."
            disabled={isLoading}
            className="flex-1 border-zinc-700 bg-zinc-800/60 text-zinc-50 placeholder:text-zinc-400 focus-visible:ring-zinc-600 disabled:opacity-50"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || input.trim().length === 0}
            className={cn(
              "bg-primary text-zinc-900 transition-all duration-200 hover:bg-primary/90",
              isLoading && "animate-pulse"
            )}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
