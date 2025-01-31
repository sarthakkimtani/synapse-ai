import { OctagonX } from "lucide-react";

export const ErrorBanner = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <OctagonX color="#FFE9B4" size={100} />
      <h5 className="font-semibold text-xl text-white text-center mt-5">{message}</h5>
      <p className="text-md mt-1 text-center text-white">Please try again later.</p>
    </div>
  );
};
