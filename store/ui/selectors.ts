import { RootState } from "..";

const groupValueSelector = (state: RootState) => state.uiState.radioGroupValue;
const sliderValueSelector = (state: RootState) => state.uiState.sliderValue;
const randomNumValueSelector = (state: RootState) => state.uiState.randomNum;
const resultsListSelector = (state: RootState) => state.uiState.resultsList;

export { groupValueSelector, sliderValueSelector, randomNumValueSelector, resultsListSelector };
