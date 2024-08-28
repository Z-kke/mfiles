export type ProjectState = "Not Started" | "Launched" | "Finished";

export interface Project {
  id: number;
  name: string;
  state: ProjectState;
}
