"use client";

import { useSelector } from "react-redux";
import { UseStoreDispatcher } from "@/store";
import { groupValueSelector, sliderValueSelector } from "@/store/ui/selectors";
import { handleNewTry, handleRandomNumValue } from "@/store/ui/slice";

import { Button } from "@mui/material";
import { getRandomNumber } from "@/utils/functions";
import toast from "react-hot-toast";

export default function PlayButton() {
  const dispatch = UseStoreDispatcher();
  const chosenNumber = useSelector(sliderValueSelector);
  const isUnderOrOver = useSelector(groupValueSelector);

  const handleNewTryCreating = () => {
    const randomNum = getRandomNumber();
    dispatch(handleRandomNumValue(randomNum));

    let result = "Lose";
    if (isUnderOrOver === "Over" && randomNum > chosenNumber) {
      result = "Win";
    } else if (isUnderOrOver === "Under" && randomNum < chosenNumber) {
      result = "Win";
    }

    const newTry = {
      time: new Date().toLocaleTimeString(),
      guess: `${chosenNumber} ${isUnderOrOver}`,
      result,
    };
    dispatch(handleNewTry(newTry));

    if (result === "Win") {
      toast.success(`You won! Random number was ${randomNum}`);
    } else {
      toast.error(`You lost! Random number was ${randomNum}`);
    }
  };

  const handleClick = () => {
    handleNewTryCreating();
  };

  const ifCOnditionsAre = isUnderOrOver && chosenNumber ? false : true;
  return (
    <Button
      color="secondary"
      variant="contained"
      size="large"
      fullWidth
      onClick={handleClick}
      disabled={ifCOnditionsAre}
    >
      {"PLAY"}
    </Button>
  );
}
