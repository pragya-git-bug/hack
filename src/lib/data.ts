export const problem = {
  title: "Two Sum",
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  difficulty: "Easy",
  examples: [
    {
      input: "size = 4\narr = [2, 7, 11, 15]\ntarget = 9",
      output: "[0, 1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "size = 3\narr = [3, 2, 4]\ntarget = 6",
      output: "[1, 2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      input: "size = 2\narr = [3, 3]\ntarget = 6",
      output: "[0, 1]",
      explanation: "Because nums[0] + nums[1] == 6, we return [0, 1].",
    },
  ],
  inputFormat: "5\n2 7 11 15 9\n9",
  testCases: [
    {
      input: "4\n2 7 11 15\n9",
      expectedOutput: "[ 0, 1 ]",
    },
    {
      input: "3\n3 2 4\n6",
      expectedOutput: "[ 1, 2 ]",
    },
    {
      input: "2\n3 3\n6",
      expectedOutput: "[ 0, 1 ]",
    },
    {
      input: "4\n1 5 3 4\n7",
      expectedOutput: "[ 2, 3 ]",
    },
    {
      input: "5\n1 2 3 4 5\n9",
      expectedOutput: "[ 3, 4 ]",
    },
  ],
  starterCode: `let input = "";
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
`,
};

export const mockAssignments = [
  {
    id: "1",
    title: "Data Structures Assignment",
    description: "Implement a binary search tree",
    teacherName: "Dr. Smith",
    dueDate: "2023-06-15",
  },
  {
    id: "2",
    title: "Algorithm Analysis",
    description: "Analyze the time complexity of sorting algorithms",
    teacherName: "Prof. Johnson",
    dueDate: "2023-06-20",
  },
  {
    id: "3",
    title: "Database Systems",
    description: "Design a normalized schema for a library management system",
    teacherName: "Dr. Brown",
    dueDate: "2023-06-25",
  },
];

export const languages = [
  {
    value: "cpp",
    label: "C++",
    id: 52,
  },
  {
    value: "c",
    label: "C",
    id: 48,
  },
  {
    value: "java",
    label: "Java",
    id: 62,
  },
  {
    value: "javascript",
    label: "JavaScript",
    id: 63,
  },
  {
    value: "python",
    label: "Python",
    id: 71,
  },
];
