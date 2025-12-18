"use client";

import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import { UseStoreDispatcher } from "@/store";
import { sliderValueSelector } from "@/store/ui/selectors";
import { handleSliderValue } from "@/store/ui/slice";

import { MAX, MIN } from "@/utils/constants";

export default function SliderInput() {
  const dispatch = UseStoreDispatcher();
  const value = useSelector(sliderValueSelector);

  const handleChange = (_: Event, newValue: number | number[]) => {
    dispatch(handleSliderValue(newValue as number));
  };

  return (
    <Box
      width={"100%"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifySelf={"center"}
    >
      <Slider
        step={1}
        value={value}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        color="secondary"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() => dispatch(handleSliderValue(MIN))}
          sx={{ cursor: "pointer" }}
        >
          {MIN}
        </Typography>
        <Typography
          variant="body2"
          onClick={() => dispatch(handleSliderValue(MAX))}
          sx={{ cursor: "pointer" }}
        >
          {MAX}
        </Typography>
      </Box>
    </Box>
  );
}
