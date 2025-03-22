import { OctagonX } from "lucide-react";

export const ErrorBanner = ({ message }: { message: string }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <OctagonX color="#FFE9B4" size={100} />
      <h5 className="mt-5 text-center text-xl font-semibold text-white">{message}</h5>
      <p className="text-md mt-1 text-center text-white">Please try again later.</p>
    </div>
  );
};
