export const assignments = [
  {
    id: "1",
    title: "Basic Math Operations",
    description:
      "An assignment to practice basic arithmetic operations like addition and multiplication.",
    dueDate: "2024-09-20T23:59:59.999Z",
    teacherName: "Pata nahi",
    problems: [
      {
        title: "Add Two Numbers",
        description: "Given two numbers, return their sum.",
        difficulty: "Easy",
        examples: [
          {
            input: "num1 = 3\nnum2 = 5",
            output: "8",
            explanation: "3 + 5 equals 8.",
          },
          {
            input: "num1 = 10\nnum2 = 20",
            output: "30",
            explanation: "10 + 20 equals 30.",
          },
        ],
        inputFormat: "2\n3 5",
        testCases: [
          {
            input: "3 5",
            expectedOutput: "8",
          },
          {
            input: "10 20",
            expectedOutput: "30",
          },
          {
            input: "0 0",
            expectedOutput: "0",
          },
          {
            input: "-5 7",
            expectedOutput: "2",
          },
        ],
      },
      {
        title: "Multiply Two Numbers",
        description: "Given two numbers, return their product.",
        difficulty: "Easy",
        examples: [
          {
            input: "num1 = 4\nnum2 = 6",
            output: "24",
            explanation: "4 * 6 equals 24.",
          },
          {
            input: "num1 = 7\nnum2 = 3",
            output: "21",
            explanation: "7 * 3 equals 21.",
          },
        ],
        inputFormat: "2\n4 6",
        testCases: [
          {
            input: "4 6",
            expectedOutput: "24",
          },
          {
            input: "7 3",
            expectedOutput: "21",
          },
          {
            input: "0 5",
            expectedOutput: "0",
          },
          {
            input: "-5 3",
            expectedOutput: "-15",
          },
        ],
      },
    ],
  },
];

const jsStarterCode = `let input = "";
let currentLine = 0;
process.stdin.on("data", (input_data) => {
  input += input_data;
});

process.stdin.on("end", () => {
  input = input.split("\\n");
  main();
});

/**
 * Read input from stdin 
 * For number use Number(readLine().trim());
 * For array use readLine().trim().split(" ").map(Number);
 */
const readLine = () => {
  return input[currentLine++];
};

const main = () => {
  // Handle the stdin input here

  // Main fn execution
  console.log(functionName());
};

const functionName = () => {
  // Enter your code here
};
`;

export const starterCode = {
  63: jsStarterCode,
};
