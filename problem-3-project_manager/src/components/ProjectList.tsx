import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { useProjects } from "../context/ProjectContext";

const ProjectList: React.FC = () => {
  const { projects, selectedProjects, toggleProjectSelection } = useProjects();

  return (
    <List>
      {projects.map((project) => (
        <Paper
          elevation={1}
          key={project.id}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <ListItem
            onClick={() => toggleProjectSelection(project.id)}
            style={{
              margin: 8,
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
              height: "100px",
              padding: "16px",
            }}
          >
            <ListItemText
              primary={project.name}
              secondary={project.state}
              primaryTypographyProps={{
                fontWeight: "bold",
                textAlign: "center",
                alignSelf: "flex-start",
              }}
              secondaryTypographyProps={{
                textAlign: "center",
                alignSelf: "flex-end",
                marginTop: "auto",
              }}
            />
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default ProjectList;
