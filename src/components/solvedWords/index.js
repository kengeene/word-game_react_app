import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function OutlinedCard({ resolvedWords }) {
  const Item = styled(Paper)(({ theme }) => ({
    flexGrow: 1,
    borderRadius: "10rem",
  }));
  return (
    <Box>
      <Stack spacing={2}>
        {Object.entries(resolvedWords).map(([name, array], index) => (
          <Item
            className={`row-${index} answer-card`}
            data-testid={"answer" + index}
            key={index}
          >
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
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
