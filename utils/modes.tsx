import { Club, MessageSquareText } from "lucide-react";

export const modes = [
  {
    name: "Flashcards",
    icon: <Club className="text-primary w-5" />,
    route: "flashcards",
    description: "Study vocabulary and phrases with flashcards.",
  },
  {
    name: "Role-Play",
    icon: <MessageSquareText className="text-primary w-5" />,
    route: "role-play",
    description: "Chat with different characters to practice conversational skills.",
  },
];
