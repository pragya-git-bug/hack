"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ErrorComponentProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

function ErrorComponent({
  title = "Oops! An error occurred",
  description = "Please try again later",
  onRetry,
}: ErrorComponentProps = {}) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <AlertCircle className="w-6 h-6 text-destructive" />
        <CardTitle className="text-center text-destructive">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
      {onRetry && (
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={onRetry}>
            Try Again
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default ErrorComponent;
