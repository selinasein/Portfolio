import { projects } from "./projects";

export function getProjectById(id) {
  const project_id = parseInt(id);
  return projects.find((project) => project.id === project_id);
}
