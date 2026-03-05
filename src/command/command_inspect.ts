import type { State } from "../internal/state.js";
import { Pokemon } from "../types/pokemon.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];

  if (!state.pokedex[name]) {
    console.log("you have not caught that pokemon");
    return;
  }

  const pokemon: Pokemon = state.pokedex[name];

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log(`Stats:`);
  pokemon.stats.forEach((stat) => {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  });

  console.log("Types:");
  pokemon.types.forEach((typeInfo) => {
    console.log(`  -${typeInfo.type.name}`);
  });
  return;
}
