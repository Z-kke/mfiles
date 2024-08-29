import React from "react";
import Grid from "@mui/material/Grid2";
import ProjectList from "./components/ProjectList";
import ControlPanel from "./components/ControlPanel";
import { ProjectProvider } from "./context/ProjectContext";

// TODO: Change background color to blue on hover if selectable.
// TODO: Make the mock data the same as in the assignment.

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <Grid container spacing={4}>
        <Grid size={8}>
          <ProjectList />
        </Grid>
        <Grid size={4}>
          <ControlPanel />
        </Grid>
      </Grid>
    </ProjectProvider>
  );
};

export default App;
