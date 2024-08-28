import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { useProjects } from "../context/ProjectContext";

const ProjectList: React.FC = () => {
  const { projects, selectedProjects, toggleProjectSelection } = useProjects();

  return (
    <List>
      {projects.map((project) => (
        <ListItem
          key={project.id}
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
          }}
        >
          <ListItemText primary={project.name} secondary={project.state} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectList;
