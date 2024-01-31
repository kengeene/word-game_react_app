import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ resolvedWords }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <>
            {Object.entries(resolvedWords).map(([name, array], index) => (
              <CardContent className={`row-${index}`}>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {array.toString()}
                </Typography>
              </CardContent>
            ))}
          </>
        </React.Fragment>
      </Card>
    </Box>
  );
}
