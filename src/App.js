import React from 'react';
import './App.css';
import { Navigation, PostDetails } from "./components";
import { Paper, Grid } from '@material-ui/core';
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  min-width: 600px;
`;

function App() {
  return (
    <Grid container spacing={3}>
      <StyledGrid justify="center" alignItems="center" xs={12} lg={6} item>
        <Navigation />
      </StyledGrid>
      <Grid direction="column" justify="center"
            alignItems="center" xs={12} lg={6} item>
        <PostDetails flex />
      </Grid>

    </Grid>

  );
}

export default App;
