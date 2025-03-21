"use client";

import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface HighlightedSegment {
  type: "suggestion" | "improvement" | "normal";
  text: string;
  comment?: string;
}

interface AnalysisStats {
  suggestions: number;
  improvements: number;
}

export const WritingAnalysis = ({ text }: { text: string }) => {
  const parseHighlightedContent = (content: string): HighlightedSegment[] => {
    const segments: HighlightedSegment[] = [];

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content
      .replace(/<suggestion>([\s\S]*?)<\/suggestion>/gi, (match) => {
        return `<span class="suggestion">${match}</span>`;
      })
      .replace(/<improvement>([\s\S]*?)<\/improvement>/gi, (match) => {
        return `<span class="improvement">${match}</span>`;
      });

    const processNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent && node.textContent.trim() !== "") {
          segments.push({
            type: "normal",
            text: node.textContent,
          });
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;

        if (element.classList.contains("suggestion") || element.classList.contains("improvement")) {
          const type = element.classList.contains("suggestion") ? "suggestion" : "improvement";
          const content = element.innerHTML;

          const tagRegex =
            type === "suggestion"
              ? /<suggestion>([\s\S]*?)<\/suggestion>/i
              : /<improvement>([\s\S]*?)<\/improvement>/i;

          const match = tagRegex.exec(content);

          if (match) {
            const innerContent = match[1];
            const commentMatch = /<comment>([\s\S]*?)<\/comment>/i.exec(innerContent);

            let cleanedText = innerContent;
            let comment = "";

            if (commentMatch) {
              comment = commentMatch[1];
              cleanedText = innerContent.replace(/<comment>[\s\S]*?<\/comment>/gi, "");
            }

            segments.push({
              type: type as "suggestion" | "improvement",
              text: cleanedText,
              comment,
            });
          }
        } else {
          Array.from(element.childNodes).forEach(processNode);
        }
      }
    };

    Array.from(tempDiv.childNodes).forEach(processNode);
    return segments;
  };

  const renderSegment = (segment: HighlightedSegment, index: number) => {
    if (segment.type === "normal") {
      return <span key={index}>{segment.text}</span>;
    }

    const highlightClass =
      segment.type === "suggestion"
        ? "bg-green-600/30 border-b-2 border-green-600 px-0.5"
        : "bg-yellow-600/30 border-b-2 border-yellow-600 px-0.5";

    if (!segment.comment) {
      return (
        <motion.span
          key={index}
          className={highlightClass}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {segment.text}
        </motion.span>
      );
    }

    return (
      <Tooltip key={index}>
        <TooltipTrigger asChild>
          <motion.span
            className={`${highlightClass} cursor-pointer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {segment.text}
          </motion.span>
        </TooltipTrigger>
        <TooltipContent className="bg-[#333533] text-sm text-white border border-neutral-700">
          {segment.comment}
        </TooltipContent>
      </Tooltip>
    );
  };

  const segments = parseHighlightedContent(text);

  const stats: AnalysisStats = segments.reduce(
    (acc, segment) => {
      if (segment.type === "suggestion") acc.suggestions++;
      if (segment.type === "improvement") acc.improvements++;
      return acc;
    },
    { suggestions: 0, improvements: 0 }
  );

  return (
    <TooltipProvider>
      <div className="w-full h-full flex flex-col">
        <motion.div
          className="mb-4 p-3 rounded-lg bg-[#212221] border border-neutral-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-neutral-300 font-medium mb-2">Writing Analysis</h3>
          <div className="flex flex-wrap gap-3">
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-sm text-neutral-300">
                <span className="font-medium">{stats.suggestions}</span> Suggestions
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-neutral-300">
                <span className="font-medium">{stats.improvements}</span> Improvements
              </span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="w-full flex-1 overflow-y-auto overflow-x-hidden text-white p-2 break-words max-h-[calc(100%-100px)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block whitespace-pre-wrap">
            {segments.map((segment, index) => renderSegment(segment, index))}
          </div>
        </motion.div>
      </div>
    </TooltipProvider>
  );
};
