import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useProjects } from "../context/ProjectContext";

const ProjectList: React.FC = () => {
  const { projects, selectedProjects, toggleProjectSelection } = useProjects();

  return (
    <List>
      {projects.map((project) => (
        <Paper
          key={project.id}
          elevation={1}
          sx={{
            width: "100%",
            marginBottom: 2,
          }}
        >
          <ListItem
            onClick={() => toggleProjectSelection(project.id)}
            style={{
              cursor: project.state === "Finished" ? "not-allowed" : "pointer",
              backgroundColor: selectedProjects.includes(project.id)
                ? "lightblue"
                : "white",
              color: selectedProjects.includes(project.id) ? "white" : "black",
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
      ))}
    </List>
  );
};

export default ProjectList;
