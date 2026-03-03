import { State } from "./state";

export function commandExit(state: State) {
  state.readline.close();
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
}
