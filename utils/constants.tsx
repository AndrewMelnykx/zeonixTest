import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const columns: GridColDef[] = [
  { field: "time", headerName: "Time", flex: 1 },
  { field: "guess", headerName: "Guess", flex: 1, type: "number" },
  {
    field: "result",
    headerName: "Result",
    flex: 1,
    renderCell: params => (
      <Box sx={{ mt: "0.7rem" }}>
        <Typography
          sx={{
            color: params.value === "Win" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {params.value}
        </Typography>
      </Box>
    ),
  },
];

export { marks, MAX, MIN, columns };
