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

interface RunDialogProps {
  testCase: TestCase;
  result: Result | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface TestResultProps {
  testCase: TestCase;
  result: Result | null;
}

function TestResult({ testCase, result }: TestResultProps) {
  if (!testCase || !result) {
    return <div className="text-white">No test results available.</div>;
  }
  const passed = result?.status.id === 3;

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-4 p-4 bg-dark rounded-lg border-4 border-gray-700">
        <TestCaseResultIcon passed={passed} />
        <TestCaseResult
          testCase={testCase}
          result={result}
          passed={passed}
          index={0}
        />
      </div>
    </div>
  );
}

function RunDialog({ testCase, result, open, onOpenChange }: RunDialogProps) {
  const passed = result?.status.id === 3; // Accepted
  const title = result?.status.description;
  const titleColor = passed ? "text-green-500" : "text-red-500";
  const description = passed ? "Test Case Passed" : "Test Case Failed";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[80vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-3xl font-bold ${titleColor}`}>
            {title}
          </DialogTitle>
          <DialogDescription className=" text-white mt-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        <TestResult testCase={testCase} result={result} />
      </DialogContent>
    </Dialog>
  );
}

export default RunDialog;
