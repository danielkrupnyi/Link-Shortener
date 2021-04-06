import React from "react";
import "./App.css";
import { Box, Grid } from "@material-ui/core";
import Form from "./components/Form";
import ShortsList from "./components/ShortsList";
import { useAppSelector } from "./store/hooks";

const App: React.FC = () => {
  const shorts = useAppSelector((state) => state.shorts.value);

  return (
    <Box>
      <Grid
        className="App"
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Form />
        <ShortsList shorts={shorts} />
      </Grid>
    </Box>
  );
};

export default App;
