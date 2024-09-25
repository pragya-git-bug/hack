import { Problem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import ExampleTile from "./ExampleTile";

interface ProblemDescriptionProps {
  problem: Problem;
}

function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="h-full p-4 text-gray-200 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">
        {problem.title}
        <Badge variant="outline" className="ml-2 text-green-500">
          {problem.difficulty}
        </Badge>
      </h2>
      <p className="text-gray-300">{problem.description}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Examples:</h3>
      {problem.examples.map((example, index) => (
        <ExampleTile example={example} key={index} />
      ))}
      <h3 className="text-xl font-semibold mt-4 mb-2">Input Format:</h3>
      <pre className="bg-[#2d2d2d] my-4 p-2 rounded whitespace-pre-wrap text-gray-300">
        {problem.inputFormat.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </pre>
    </div>
  );
}

export default ProblemDescription;
