import { intro } from "./intro.js";
import { githubProjects } from "./github-projects.js";
import { contact } from "./contact.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.append(intro, githubProjects, contact);

  return container;
};
