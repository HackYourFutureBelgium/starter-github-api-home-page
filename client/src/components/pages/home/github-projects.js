import { fetchUser } from "../../../api-calls/api-call.js";

export const githubProjects = document.createElement("section");
githubProjects.className = "s1";

const div = document.createElement("div");
div.className = "main-container";

const projects = document.createElement("div");
projects.className = "projects-list";
div.appendChild(projects);
githubProjects.appendChild(div);

export const showProjects = async () => {
  try {
    const response = await fetchUser();

    let newFirst = response.sort((a, b) => b.created_at - a.created_at);

    newFirst.forEach((element) => {
      const wrapper = document.createElement("div");
      wrapper.className = "project-wrapper";

      const projectHeader = document.createElement("div");
      projectHeader.className = "project-header";

      const info = document.createElement("div");
      info.className = "info";
      const dateCreated = new Date(element.created_at);
      info.innerHTML = `<span class='name'>${
        element.name
      }</span> <span class='date'>${dateCreated.toLocaleDateString()}</span>`;

      const menu = document.createElement("div");
      menu.className = "project-menu";

      const link = document.createElement("div");
      link.className = "link";
      link.innerHTML = `<a href = ${element.homepage}> <i class="fas fa-eye"></i> </a>`;

      const code = document.createElement("div");
      code.className = "code";
      code.innerHTML = `<a href = ${element.html_url}> <i class="fas fa-code"></i> </a>`;

      const description = document.createElement("div");
      description.className = "description";
      description.textContent = `${element.description}`;

      projects.appendChild(wrapper);
      wrapper.append(projectHeader, description);
      projectHeader.append(info, menu);

      if (element.homepage === null) {
        menu.append(code);
      } else {
        menu.append(code, link);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
