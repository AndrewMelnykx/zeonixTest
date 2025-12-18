"use client";

import { useSelector } from "react-redux";
import { UseStoreDispatcher } from "@/store";
import { groupValueSelector } from "@/store/ui/selectors";
import { handleRadioGroupValue } from "@/store/ui/slice";

import { Radio, RadioGroup, FormControlLabel, Box } from "@mui/material";

export default function RadioButtons() {
  const dispatch = UseStoreDispatcher();
  const selectedValue = useSelector(groupValueSelector);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleRadioGroupValue(event.target.value));
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={16}
    >
      <RadioGroup
        row
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        value={selectedValue}
        onChange={handleChange}
        sx={{ gap: 4 }}
      >
        <FormControlLabel
          value="Under"
          control={<Radio color="secondary" />}
          label="Under"
          sx={{ "& .MuiFormControlLabel-label": { fontSize: "1.25rem" } }}
        />
        <FormControlLabel
          value="Over"
          control={<Radio color="secondary" />}
          label="Over"
          sx={{ "& .MuiFormControlLabel-label": { fontSize: "1.25rem" } }}
        />
      </RadioGroup>
    </Box>
  );
}
