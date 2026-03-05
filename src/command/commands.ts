import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { CLICommand } from "../internal/state.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Get Next 20 Locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Get Prev 20 Locations",
      callback: commandMapB,
    },
    explore: {
      name: "expore",
      description: "Explore a Location Pokemons",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch a Pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a Pokemon",
      callback: commandInspect,
    },

    pokedex: {
      name: "pokedex",
      description: "Inspect your Pokemons",
      callback: commandPokedex,
    },
  };
}
