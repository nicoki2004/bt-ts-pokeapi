import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { CLICommand } from "./state.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";

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
  };
}
