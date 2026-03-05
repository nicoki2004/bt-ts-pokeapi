import { State } from "../internal/state";

export async function commandExit(state: State) {
  state.readline.close();
  state.pokeAPI.closeCache();
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
}
