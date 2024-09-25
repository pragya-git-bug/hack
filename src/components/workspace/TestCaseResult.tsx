import { TestCase, Result } from "@/lib/types";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Memory, Time } from "../common/Icons";
import ErrorMessage from "@/components/common/ErrorMessage";

interface TestCaseResultProps {
  testCase: TestCase;
  result: Result;
  passed: boolean;
  index: number;
}

function TestCaseResult({
  testCase,
  result,
  passed,
  index,
}: TestCaseResultProps) {
  return (
    <div className="flex-grow space-y-2">
      <h3 className="text-lg font-semibold text-white">
        Test Case {index + 1}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm font-medium text-gray-400">Input</h4>
          <ScrollArea className="h-24 w-full rounded border border-gray-700">
            <pre className="p-2 text-sm text-white whitespace-pre-wrap">
              {testCase.input}
            </pre>
          </ScrollArea>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-400">Expected Output</h4>
          <ScrollArea className="h-24 w-full rounded border border-gray-700">
            <pre className="p-2 text-sm text-white whitespace-pre-wrap">
              {testCase.expectedOutput}
            </pre>
          </ScrollArea>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-400">Actual Output</h4>
          <ScrollArea className="h-24 w-full rounded border border-gray-700">
            <pre className="p-2 text-sm text-white whitespace-pre-wrap">
              {result?.stdout}
            </pre>
          </ScrollArea>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-4 mt-2 text-white">
        <div className="flex flex-row items-center gap-2">
          <Time />
          <span>
            {result.time ? Math.round(Number(result.time) * 1000) : "-"} ms
          </span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Memory />
          <span>{result?.memory || "-"} KB</span>
        </div>
      </div>
      {!passed && result?.stderr && (
        <div className="mt-2 p-2 bg-dark rounded">
          <pre className="text-sm text-red-600 whitespace-pre-wrap">
            <ErrorMessage stderr={result.stderr} />
          </pre>
        </div>
      )}
    </div>
  );
}

export default TestCaseResult;
