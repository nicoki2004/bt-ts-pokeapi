// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
  console.log("Welcome to the Pokedex!");
  const state = initState();
  startREPL(state);
}

main();
