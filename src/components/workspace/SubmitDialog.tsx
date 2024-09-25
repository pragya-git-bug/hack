import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Result, TestCase } from "@/lib/types";
import TestCaseResult from "./TestCaseResult";
import TestCaseResultIcon from "./TestCaseResultIcon";

interface SubmitDialogProps {
  testCases?: TestCase[];
  results?: Result[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SubmitResultProps {
  testCases?: TestCase[];
  results?: Result[];
}

function SubmitResult({ testCases, results }: SubmitResultProps) {
  if (!testCases || !results) {
    return <div className="text-white">No test results available.</div>;
  }

  return (
    <div className="space-y-4">
      {testCases.map((testCase, index) => {
        const result = results[index];
        const passed = result?.status.id === 3;
        return (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-dark rounded-lg border-4 border-gray-700"
          >
            <TestCaseResultIcon passed={passed} />
            <TestCaseResult
              testCase={testCase}
              result={result}
              passed={passed}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}

function SubmitDialog({
  testCases,
  results,
  open,
  onOpenChange,
}: SubmitDialogProps) {
  const allTestsPassed =
    results?.every((result) => result.status.id === 3) ?? false;
  const title = allTestsPassed ? "All Tests Passed" : "Some Tests Failed";
  const titleColor = allTestsPassed ? "text-green-500" : "text-red-500";
  const description = allTestsPassed
    ? "All test cases passed successfully."
    : `${results?.filter((r) => r.status.id !== 3).length} out of ${
        results?.length
      } tests failed.`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[80vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-3xl font-bold ${titleColor}`}>
            {title}
          </DialogTitle>
          <DialogDescription className="text-white mt-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        <SubmitResult testCases={testCases} results={results} />
      </DialogContent>
    </Dialog>
  );
}

export default SubmitDialog;
