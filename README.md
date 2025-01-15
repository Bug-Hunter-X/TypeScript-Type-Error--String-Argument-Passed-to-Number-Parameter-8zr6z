# TypeScript Type Error: String Argument Passed to Number Parameter

This repository demonstrates a common type error in TypeScript where a string is passed as an argument to a function expecting a number.  The `bug.ts` file contains the buggy code, and `bugSolution.ts` provides a solution.  This example highlights the importance of TypeScript's type system in catching potential errors during development, preventing runtime surprises.

## How to reproduce the bug

1. Clone the repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc).
3. You will observe a type error indicating that the string argument ('1') is incompatible with the number parameter in the `add` function. 

## Solution

The `bugSolution.ts` file illustrates ways to resolve this issue, such as explicit type checking and type conversion using `parseInt()`. 