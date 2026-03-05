// repl.js actually refers to repl.ts
import { startREPL } from "./internal/repl.js";
import { initState } from "./internal/state.js";

async function main() {
  console.log("Welcome to the Pokedex!");
  const state = initState(1000 * 60 * 5);
  await startREPL(state);
}

main();
