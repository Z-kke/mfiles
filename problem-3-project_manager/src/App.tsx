import React from "react";
import { Container } from "@mui/material";
import ProjectList from "./components/ProjectList";
import ControlPanel from "./components/ControlPanel";
import { ProjectProvider } from "./context/ProjectContext";

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <Container>
        <h1>Project Manager</h1>
        <ProjectList />
        <ControlPanel />
      </Container>
    </ProjectProvider>
  );
};

export default App;
