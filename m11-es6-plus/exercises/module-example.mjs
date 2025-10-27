// module-example.mjs
// Example showing export/import (use Node with --experimental-modules or in browser bundler)
export function greet(name = "Student") {
  return `Hello, ${name}`;
}

// In another file: import { greet } from './module-example.mjs';
