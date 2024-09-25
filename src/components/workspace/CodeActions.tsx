import RunCode from "./RunCode";
import SubmitCode from "./SubmitCode";
import { Problem } from "@/lib/types";
import { languages } from "../../lib/data";

interface CodeActionsProps {
  problem: Problem;
  code: string;
  language: string;
}

function CodeActions({ problem, code, language }: CodeActionsProps) {
  const language_id = languages.find((lang) => lang.value === language)?.id;
  return (
    <div
      className="h-full p-4 flex flex-col justify-end space-y-4"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      <div className="flex justify-end space-x-4">
        <RunCode problem={problem} code={code} language_id={language_id} />
        <SubmitCode problem={problem} code={code} language_id={language_id} />
      </div>
    </div>
  );
}

export default CodeActions;
