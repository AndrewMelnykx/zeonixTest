"use client";

import { useSelector } from "react-redux";
import { resultsListSelector } from "@/store/ui/selectors";

import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { columns } from "@/utils/constants";
import { rowsByState } from "@/utils/functions";

export default function ResultsList() {
  const results = useSelector(resultsListSelector);
  const rows = rowsByState(results);

  const latestResults = rows.slice(-10);

  return (
    <Paper
      sx={{
        height: { xs: 300, sm: 376 },
        width: { xs: "100%", sm: "600px" },
        maxWidth: "100%",
      }}
    >
      <DataGrid
        rows={latestResults}
        columns={columns}
        hideFooterPagination
        sx={{
          border: 0,
          fontSize: { xs: "0.8rem", sm: "1rem" },
        }}
      />
    </Paper>
  );
}
