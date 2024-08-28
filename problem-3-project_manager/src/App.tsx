import React from "react";
import Grid from "@mui/material/Grid2";
import ProjectList from "./components/ProjectList";
import ControlPanel from "./components/ControlPanel";
import { ProjectProvider } from "./context/ProjectContext";

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
