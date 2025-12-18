import { createSlice } from "@reduxjs/toolkit";

import { MIN } from "@/utils/constants";
import { UIInitialState } from "./types";

const initialState: UIInitialState = {
  radioGroupValue: "",
  sliderValue: MIN,
  randomNum: 100,
  resultsList: [],
};

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: initialState,

  reducers: {
    handleRadioGroupValue: (state, action) => {
      state.radioGroupValue = action.payload;
    },
    handleSliderValue: (state, action) => {
      state.sliderValue = action.payload;
    },
    handleRandomNumValue: (state, action) => {
      state.randomNum = action.payload;
    },
    handleNewTry: (state, action) => {
      state.resultsList.push(action.payload);
    },
  },
});
export const { handleRadioGroupValue, handleSliderValue, handleRandomNumValue, handleNewTry } =
  uiSlice.actions;

export default uiSlice;
