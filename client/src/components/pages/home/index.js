import { intro } from "./intro.js";
import { githubProjects } from "./github-projects.js";
import { contact } from "./contact.js";
import { showProjects } from "./github-projects.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.append(intro, githubProjects, contact);
  container.append(showProjects());
  return container;
};
