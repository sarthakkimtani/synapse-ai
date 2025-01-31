import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const ErrorAlert = ({ error }: { error: Error }) => {
  return (
    <Alert
      variant="destructive"
      className="animate-in slide-in-from-top-2 fade-in-20 bg-red-900/50 border-red-900 text-red-50"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
};
