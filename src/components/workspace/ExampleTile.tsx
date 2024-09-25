import { Example } from "@/lib/types";

interface ExampleProps {
  example: Example;
}

function ExampleTile({ example }: ExampleProps) {
  return (
    <pre className="bg-[#2d2d2d] my-4 p-2 rounded whitespace-pre-wrap text-gray-300">
      <p>
        <strong>Input:</strong> {example.input}
      </p>
      <p>
        <strong>Output:</strong> {example.output}
      </p>
      <p>
        <strong>Explanation:</strong> {example.explanation}
      </p>
    </pre>
  );
}

export default ExampleTile;
