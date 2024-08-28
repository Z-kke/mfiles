import React, { createContext, useContext, useState } from "react";
import { Project, ProjectState } from "../types/Project";

interface ProjectContextType {
  projects: Project[];
  selectedProjects: number[];
  toggleProjectSelection: (id: number) => void;
  clearSelection: () => void;
  updateProjectState: (newState: ProjectState) => void;
}

const initialData: Project[] = [
  { id: 1, name: "Project A", state: "Not Started" },
  { id: 2, name: "Project B", state: "Not Started" },
  { id: 3, name: "Project C", state: "Launched" },
  { id: 4, name: "Project D", state: "Finished" },
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
