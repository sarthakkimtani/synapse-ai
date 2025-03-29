import Image from "next/image";

import Synapse from "@/assets/synapse.svg";

export const LoadingBubble = () => {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
        <Image src={Synapse} draggable={false} alt="synapse" className="h-4 w-4 text-zinc-400" />
      </div>
      <div className="max-w-[85%] animate-pulse rounded-2xl bg-zinc-800 px-4 py-2 text-zinc-50">
        <div className="flex space-x-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-zinc-400"></div>
        </div>
      </div>
    </div>
  );
};
