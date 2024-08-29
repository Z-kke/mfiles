import React from "react";
import { List, ListItem, Paper, Typography, Box } from "@mui/material";
import { useProjects } from "../context/ProjectContext";

const ProjectList: React.FC = () => {
  const { projects, selectedProjects, toggleProjectSelection } = useProjects();

  // Determine the state of the first selected project, if any
  const selectedState = selectedProjects.length
    ? projects.find((project) => selectedProjects.includes(project.id))?.state
    : null;

  return (
    <List>
      {projects.map((project) => {
        const isSelectable =
          project.state !== "Finished" &&
          (!selectedState || selectedState === project.state);

        return (
          <Paper
            key={project.id}
            elevation={1}
            sx={{
              width: "100%",
              marginBottom: 2,
            }}
          >
            <ListItem
              onClick={() => isSelectable && toggleProjectSelection(project.id)}
              sx={{
                cursor: isSelectable ? "pointer" : "not-allowed",
                backgroundColor: selectedProjects.includes(project.id)
                  ? "darkblue"
                  : "white",
                color: selectedProjects.includes(project.id)
                  ? "white"
                  : "black",
                borderRight: `25px solid ${
                  project.state === "Not Started"
                    ? "lightyellow"
                    : project.state === "Launched"
                      ? "lightgreen"
                      : "lightgray"
                }`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "75px",
                padding: "0",
                "&:hover": {
                  backgroundColor: isSelectable ? "lightblue" : "white",
                },
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {project.name}
                </Typography>
                <Typography variant="body2">{project.state}</Typography>
              </Box>
            </ListItem>
          </Paper>
        );
      })}
    </List>
  );
};

export default ProjectList;
