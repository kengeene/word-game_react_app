import { createSlice, configureStore } from "@reduxjs/toolkit";
import { flattenArray, randomizeArray, unflattenArray } from "../utils/array";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    options: [],
    flattenedOptions: [],
    randomizedOptions: [],
    regroupedArray: [],
    selectedWords: [],
    resolvedWords: [],
  },
  reducers: {
    // first step to fetch data from API
    setOptions: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.options = {
        groupOne: ["one", "two", "three"],
        groupTwo: ["four", "five", "six"],
        groupThree: ["seven", "eight", "nine"],
        groupFour: ["ten", "eleven", "tweleve"],
      };
    },
    // second step to flatten array
    flattenOptionsArray: (state) => {
      const flattenedArray = flattenArray(state.options);
      state.flattenedOptions = flattenedArray;
    },
    // third step to randomize flattened array
    randomizeOptionsArray: (state) => {
      const randomizedOptionsArray = randomizeArray(state.allOptions);
      state.randomizedOptions = randomizedOptionsArray;
    },
    // fourth step to regroup the random array for display
    regroupRandomizedOptions: (state) => {
      const randomizedOptionsArray = unflattenArray(state.randomizedOptions);
      state.regroupedArray = randomizedOptionsArray;
    },
    addSelectedWords: (state, { payload }) => {
      state.selectedWords = [...state.selectedWords, payload];
    },
    removeSelectedWord: (state, { payload }) => {
      state.selectedWords = [
        ...state.selectedWords.filter((x) => x !== payload),
      ];
    },
    clearSelectedWords: (state) => {
      state.selectedWords = [];
    },
    addResolvedWords: (state, { payload }) => {
      state.resolvedWords = { ...state.resolvedWords, ...payload };
    },
  },
});

export const {
  setOptions,
  flattenOptionsArray,
  randomizeOptionsArray,
  regroupRandomizedOptions,
  addSelectedWords,
  removeSelectedWord,
  clearSelectedWords,
  addResolvedWords,
} = gameSlice.actions;

export const store = configureStore({
  reducer: gameSlice.reducer,
});

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// {value: 1}
// store.dispatch(incremented());
// {value: 2}
// store.dispatch(decremented());
// {value: 1}
