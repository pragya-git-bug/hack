export const starterCodes = {
  c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_INPUT_SIZE 1000

char input[MAX_INPUT_SIZE];
int currentLine = 0;
char *lines[MAX_INPUT_SIZE];
int lineCount = 0;

void readInput() {
    while (fgets(input, sizeof(input), stdin)) {
        lines[lineCount] = strdup(input);
        lineCount++;
    }
}

char *readLine() {
    return lines[currentLine++];
}

void functionName() {
    // Enter your code here
}

int main() {
    readInput();
    
    // Handle the stdin input here

    // Main function execution
    functionName();

    return 0;
}
`,
  cpp: `
#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

vector<string> inputLines;
int currentLine = 0;

void readInput() {
    string input;
    while (getline(cin, input)) {
        inputLines.push_back(input);
    }
}

string readLine() {
    return inputLines[currentLine++];
}

void functionName() {
    // Enter your code here
}

int main() {
    readInput();
    
    // Handle the stdin input here

    // Main function execution
    functionName();

    return 0;
}
`,
  java: `
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    static List<String> input = new ArrayList<>();
    static int currentLine = 0;

    public static void readInput() {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            input.add(scanner.nextLine());
        }
        scanner.close();
    }

    public static String readLine() {
        return input.get(currentLine++);
    }

    public static void functionName() {
        // Enter your code here
    }

    public static void main(String[] args) {
        readInput();
        
        // Handle the stdin input here

        // Main function execution
        functionName();
    }
}
`,
  python: `
import sys

input_data = sys.stdin.read().splitlines()
current_line = 0

def read_line():
    global current_line
    line = input_data[current_line]
    current_line += 1
    return line

def function_name():
    # Enter your code here
    pass

def main():
    # Handle the stdin input here

    # Main function execution
    function_name()

if __name__ == "__main__":
    main()
`,
  javascript: `
let input = "";
let currentLine = 0;
process.stdin.on("data", (input_data) => {
  input += input_data;
});

process.stdin.on("end", () => {
  input = input.split("\\n");
  main();
});

const readLine = () => {
  return input[currentLine++];
};

const main = () => {
  // Handle the stdin input here

  // Main function execution
  console.log(functionName());
};

const functionName = () => {
  // Enter your code here
};
`,
};
