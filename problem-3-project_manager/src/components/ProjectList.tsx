import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { useProjects } from "../context/ProjectContext";

const ProjectList: React.FC = () => {
  const { projects } = useProjects();

  return (
    <List>
      {projects.map((project) => (
        <ListItem key={project.id}>
          <ListItemText primary={project.name} secondary={project.state} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectList;
