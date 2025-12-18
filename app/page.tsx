"use client";

import { randomNumValueSelector } from "@/store/ui/selectors";
import { useSelector } from "react-redux";

import SliderInput from "@/components/number-value-input";
import RadioButtons from "@/components/radio-group";
import PlayButton from "@/components/button";
import ResultsList from "@/components/dice-results-list";

import { Box, Paper, Typography } from "@mui/material";

export default function Home() {
  const randomNum = useSelector(randomNumValueSelector);

  return (
    <main>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        minHeight="100vh"
        bgcolor="background.default"
        alignItems="center"
        justifyContent="flex-start"
        p={2}
        gap={2}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            width: { xs: "100%", sm: "320px" },
            height: { xs: "150px", sm: "200px" },
            bgcolor: "grey.100",
          }}
        >
          <Typography
            variant="h1"
            color="text.primary"
            textAlign="center"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
                xl: "6rem",
              },
            }}
          >
            {randomNum}
          </Typography>
        </Paper>

        <Box
          width={{ xs: "100%", sm: "320px" }}
          height={{ xs: "auto", sm: "30vh" }}
          gap={4}
          display="flex"
          flexDirection="column"
        >
          <RadioButtons />
          <SliderInput />
          <PlayButton />
        </Box>

        <ResultsList />
      </Box>
    </main>
  );
}
