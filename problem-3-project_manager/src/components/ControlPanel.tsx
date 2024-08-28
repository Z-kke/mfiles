import React from "react";
import { Button, Stack } from "@mui/material";
import { useProjects } from "../context/ProjectContext";

const ControlPanel: React.FC = () => {
  const { selectedProjects, updateProjectState } = useProjects();

  const handleLaunch = () => updateProjectState("Launched");
  const handleFinish = () => updateProjectState("Finished");

  return (
    <Stack direction="row">
      <Button
        variant="contained"
        color="primary"
        onClick={handleLaunch}
        disabled={selectedProjects.length === 0}
      >
        Launch
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleFinish}
        disabled={selectedProjects.length === 0}
      >
        Finish
      </Button>
    </Stack>
  );
};

export default ControlPanel;
