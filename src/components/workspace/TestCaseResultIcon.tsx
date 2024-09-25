import { Check, X } from "lucide-react";

interface TestCaseResultIconProps {
  passed: boolean;
}

function TestCaseResultIcon({ passed }: TestCaseResultIconProps) {
  return (
    <div className="flex-shrink-0">
      {passed ? (
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <Check className="w-6 h-6 text-white" />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
          <X className="w-6 h-6 text-white" />
        </div>
      )}
    </div>
  );
}

export default TestCaseResultIcon;
