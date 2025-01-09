import { User, BookOpen, Edit } from "lucide-react";

export const modes = [
  {
    name: "Role-Playing",
    icon: <User className="text-primary w-5" />,
    abbreviation: "RP",
    description: "Engage in role-playing scenarios to practice conversational skills.",
  },
  {
    name: "Story Completion",
    icon: <BookOpen className="text-primary w-5" />,
    abbreviation: "SC",
    description: "Complete stories to improve your language comprehension.",
  },
  {
    name: "Description Challenges",
    icon: <Edit className="text-primary w-5" />,
    abbreviation: "DC",
    description: "Describe images or scenarios to enhance your descriptive skills.",
  },
];
