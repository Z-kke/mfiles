import React from "react";
import { Button, Stack } from "@mui/material";
import { useProjects } from "../context/ProjectContext";

const ControlPanel: React.FC = () => {
  const { selectedProjects, updateProjectState } = useProjects();

  const handleLaunch = () => updateProjectState("Launched");
  const handleFinish = () => updateProjectState("Finished");

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: "100%" }}
    >
      <Button
        variant="outlined"
        onClick={handleLaunch}
        disabled={selectedProjects.length === 0}
        sx={{ width: "200px", height: "60px" }}
      >
        Launch project
      </Button>
      <Button
        variant="outlined"
        onClick={handleFinish}
        disabled={selectedProjects.length === 0}
        sx={{ width: "200px", height: "60px" }}
      >
        Finish project
      </Button>
    </Stack>
  );
};

export default ControlPanel;
