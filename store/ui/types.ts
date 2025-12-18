interface Result {
  time: Date | string;
  guess: number;
  result: string;
}

interface UIInitialState {
  radioGroupValue: string;
  sliderValue: number;
  randomNum: number;
  resultsList: Result[];
}

export type { UIInitialState, Result };
