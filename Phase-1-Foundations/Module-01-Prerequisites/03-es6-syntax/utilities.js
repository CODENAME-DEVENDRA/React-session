//1. Named exports (can have many per file)
export const PI = 3.14159;
export function square(x) {
  return x * x;
}

//2. Default export (only one per file)
export default function cube(x) {
  return x * x * x;
}
