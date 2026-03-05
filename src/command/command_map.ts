import { ShallowLocations } from "../types/shallow_locations.js";
import { State } from "../internal/state.js";

export async function commandMap(state: State) {
  try {
    const response: ShallowLocations = await state.pokeAPI.fetchLocations(
      state.nextLocationURL,
    );
    response.results.forEach((element) => {
      console.log(element.name);
    });

    state.nextLocationURL = response.next;
    state.prevLocationURL = response.previous;
  } catch (err) {
    console.log(`Error Fetching locations: ${err}`);
  }
}

export async function commandMapB(state: State) {
  if (state.prevLocationURL === null) {
    console.log("you're on the first page");
    return;
  }

  try {
    const response: ShallowLocations = await state.pokeAPI.fetchLocations(
      state.prevLocationURL,
    );
    response.results.forEach((element) => {
      console.log(element.name);
    });

    state.nextLocationURL = response.next;
    state.prevLocationURL = response.previous;
  } catch (err) {
    console.log(`Error Fetching locations: ${err}`);
  }
}
