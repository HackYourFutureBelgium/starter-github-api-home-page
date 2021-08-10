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

      const projectNav = document.createElement("div");
      projectNav.className = "project-nav";

      const info = document.createElement("div");

      const name = document.createElement("div");
      name.className = "name";
      name.textContent = `${element.name}`;

      const date = document.createElement("div");
      date.className = "date";
      const dateCreated = new Date(element.created_at);
      date.textContent = `${dateCreated.toLocaleDateString()}`;

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

      info.append(name, date, link, code);
      projectNav.appendChild(info);
      wrapper.append(projectNav, description);
      projects.appendChild(wrapper);
    });
  } catch (error) {
    console.log(error);
  }
};
