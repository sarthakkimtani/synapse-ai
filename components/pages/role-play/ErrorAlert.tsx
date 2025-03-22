import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const ErrorAlert = ({ error }: { error: Error }) => {
  return (
    <Alert
      variant="destructive"
      className="border-red-900 bg-red-900/50 text-red-50 animate-in fade-in-20 slide-in-from-top-2"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
};
