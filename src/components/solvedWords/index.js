import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function OutlinedCard({ resolvedWords }) {
  return (
    <Box>
      <Stack spacing={2}>
        {Object.entries(resolvedWords).map(([name, array], index) => (
          <item className={`row-${index} answer-card`}>
            <Typography
              variant="h5"
              component="div"
              color="#000000"
              // sx={{ mb: 1.5 }}
            >
              {name}
            </Typography>
            <Typography
              // sx={{ mb: 1.5 }}
              color="#000000"
            >
              {array.toString()}
            </Typography>
          </item>
        ))}
      </Stack>
    </Box>
  );
}
