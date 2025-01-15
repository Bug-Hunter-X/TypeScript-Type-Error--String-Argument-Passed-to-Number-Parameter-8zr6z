function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return numA + numB;  
}

let result = addSafe("1", 2); // Correct usage, type safe
console.log(result); // Output 3
let result2 = addSafe(1,2); // Correct usage, type safe
console.log(result2); // Output 3
let result3 = addSafe("1","2");// Correct usage, type safe
console.log(result3); //Output 3