import type { State } from "../internal/state.js";

export async function commandPokedex(state: State) {
  if (Object.keys(state.pokedex).length < 1) {
    console.log("You dont have pokemons in your pokedex");
    return;
  }
  console.log("Your Pokedex:");
  for (const [key] of Object.entries(state.pokedex)) {
    console.log(`  - ${key}`);
  }
  return;
}
