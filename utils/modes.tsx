import { User, Club } from "lucide-react";

export const modes = [
  {
    name: "Role-Playing",
    icon: <User className="text-primary w-5" />,
    route: "role-play",
    description: "Engage in role-playing scenarios to practice conversational skills.",
  },
  {
    name: "Flashcards",
    icon: <Club className="text-primary w-5" />,
    route: "flashcards",
    description: "Study vocabulary and phrases with flashcards.",
  },
];
