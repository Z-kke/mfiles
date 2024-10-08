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
  { id: 1, name: "Travel to Mars", state: "Launched" },
  { id: 2, name: "Launching satellite", state: "Finished" },
  { id: 3, name: "Study: growing plants on Mars", state: "Not Started" },
  { id: 4, name: "Study: new human generation on Mars", state: "Not Started" },
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>(initialData);
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);

  const toggleProjectSelection = (id: number) => {
    const project = projects.find((p) => p.id === id);

    if (project?.state === "Finished") return;

    const firstSelectedProject = projects.find(
      (p) => p.id === selectedProjects[0],
    );
    const isSelectable =
      !firstSelectedProject || firstSelectedProject.state === project?.state;

    if (!isSelectable) return;

    setSelectedProjects((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id],
    );
  };

  const clearSelection = () => setSelectedProjects([]);

  const updateProjectState = (newState: ProjectState) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        selectedProjects.includes(project.id)
          ? { ...project, state: newState }
          : project,
      ),
    );
    clearSelection();
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProjects,
        toggleProjectSelection,
        clearSelection,
        updateProjectState,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
