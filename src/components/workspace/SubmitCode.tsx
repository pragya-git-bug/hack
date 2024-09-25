import { useState } from "react";
import { Problem } from "@/lib/types";
import { Button } from "../ui/button";
import SubmitDialog from "./SubmitDialog";
import { Spinner } from "../common/Icons";

interface SubmitCodeProps {
  problem: Problem;
  code: string;
  language_id: number;
}

function SubmitCode({ problem, code, language_id }: SubmitCodeProps) {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [openSubmitDialog, setOpenSubmitDialog] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    const testResults = await Promise.all(
      problem.testCases.map(async (testCase, index) => {
        const payload = {
          source_code: code,
          language_id,
          stdin: testCase.input,
          expected_output: testCase.expectedOutput,
        };
        const res = await fetch(
          `${import.meta.env.VITE_JUDGE0_URL}/submissions/?wait=true`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const result = await res.json();
        return { ...result, testCaseIndex: index };
      })
    );
    setSubmitLoading(false);
    setSubmitResult(testResults);
    setOpenSubmitDialog(true);
    console.log(testResults);
  };

  return (
    <>
      <Button
        onClick={handleSubmit}
        className="text-white  bg-green-600 hover:bg-green-700"
      >
        {submitLoading ? <Spinner /> : "Submit"}
      </Button>
      <SubmitDialog
        testCases={problem.testCases}
        results={submitResult}
        open={openSubmitDialog}
        onOpenChange={setOpenSubmitDialog}
      />
    </>
  );
}

export default SubmitCode;
