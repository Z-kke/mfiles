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
            borderRight: `35px solid ${
              project.state === "Not Started"
                ? "yellow"
                : project.state === "Launched"
                  ? "green"
                  : "gray"
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
