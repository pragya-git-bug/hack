import { useState } from "react";
import { Problem } from "@/lib/types";
import { Button } from "../ui/button";
import RunDialog from "./RunDialog";
import { Spinner } from "../common/Icons";

interface RunCodeProps {
  problem: Problem;
  code: string;
  language_id: number;
}

function RunCode({ problem, code, language_id }: RunCodeProps) {
  const [runLoading, setRunLoading] = useState(false);
  const [openRunDialog, setOpenRunDialog] = useState(false);
  const [runResult, setRunResult] = useState(null);

  const handleRun = async () => {
    setRunLoading(true);
    const testCase = problem.testCases[0];
    const payload = {
      source_code: code,
      language_id,
      stdin: testCase.input,
      expected_output: testCase.expectedOutput,
    };
    console.log(JSON.stringify(payload));
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
    setRunLoading(false);
    setRunResult(result);
    setOpenRunDialog(true);
    console.log(result);
  };
  return (
    <>
      <Button
        onClick={handleRun}
        variant="default"
        className="text-white bg-[#3a3a3a] hover:bg-[#4a4a4a]"
      >
        {runLoading ? <Spinner /> : "Run"}
      </Button>
      <RunDialog
        testCase={problem.testCases[0]}
        result={runResult}
        open={openRunDialog}
        onOpenChange={setOpenRunDialog}
      />
    </>
  );
}

export default RunCode;
