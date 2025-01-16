"use client";

import { motion } from "motion/react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MessageBubbleProps {
  speaker: "system" | "character" | "user";
  message: string;
}

export const MessageBubble = ({ speaker, message }: MessageBubbleProps) => {
  if (speaker === "system") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-md text-center py-4 px-6 bg-primary/5 text-primary rounded-lg mx-auto max-w-[80%]"
      >
        {message}
      </motion.div>
    );
  }

  return (
    <div className={`flex gap-4 ${speaker === "user" ? "justify-end" : "justify-start"}`}>
      {speaker !== "user" && (
        <Avatar>
          <AvatarFallback className="bg-muted text-muted-foreground">
            {speaker === "character" ? "S" : "?"}
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={`max-w-[80%] ${
          speaker === "user" ? "bg-primary text-black" : "bg-[#27272A] text-white"
        } rounded-lg p-4`}
      >
        <p>{message}</p>
      </div>

      {speaker === "user" && (
        <Avatar>
          <AvatarFallback className="bg-muted text-muted-foreground">U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};
