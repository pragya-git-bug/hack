import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorAlertProps {
  errorTitle: string;
  errorDescription?: string;
}

function ErrorAlert({ errorTitle, errorDescription }: ErrorAlertProps) {
  return (
    <Alert variant="destructive" className="max-w-md mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{errorTitle}</AlertTitle>
      <AlertDescription>{errorDescription}</AlertDescription>
    </Alert>
  );
}

export default ErrorAlert;
