
import localData from "../localData";

export const LOADING = "LOADING";
export const FILTER_GENERATION = "FILTER_GENERATION";
export const FILTER_NAME = "FILTER_NAME";

//Reducer
export const filteredReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case FILTER_GENERATION:
      return filterByGeneration(action.generationID, state);

    case FILTER_NAME:
      return filterByName(action.query, state);

    default:
      return { ...state };
  }
};

//Filter by Generation
export function filterByGeneration(generationID, state) {
  let firstPkmnOfGeneration, lastPkmnOfGeneration;
  switch (generationID) {
    case 1:
      firstPkmnOfGeneration = 0;
      lastPkmnOfGeneration = 150;
      break;
    case 2:
      firstPkmnOfGeneration = 151;
      lastPkmnOfGeneration = 250;
      break;
    case 3:
      firstPkmnOfGeneration = 251;
      lastPkmnOfGeneration = 385;
      break;
    case 4:
      firstPkmnOfGeneration = 386;
      lastPkmnOfGeneration = 492;
      break;
    case 5:
      firstPkmnOfGeneration = 493;
      lastPkmnOfGeneration = 648;
      break;
    case 6:
      firstPkmnOfGeneration = 649;
      lastPkmnOfGeneration = 720;
      break;
    case 7:
      firstPkmnOfGeneration = 721;
      lastPkmnOfGeneration = 806;
      break;
    default:
      break;
  }

  const filteredPokemons = localData.filter(
    (e, i) => i >= firstPkmnOfGeneration && i <= lastPkmnOfGeneration
  );

  return { ...state, filteredList: filteredPokemons };
}

//Filter by Name
function filterByName(query, state) {

  if (query) {
    const filterPokemons = localData.filter(e => e.name.startsWith(query));
    return { ...state, filteredList: filterPokemons };
  } else {
    return filterByGeneration(
      Number(localStorage.getItem("generationID")) || 1,
      state
    );
  }

}
