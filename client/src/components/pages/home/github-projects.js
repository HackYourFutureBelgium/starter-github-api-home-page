import { fetchUser } from "../../../api-calls/api-call.js";

export const githubProjects = document.createElement("section");
githubProjects.className = "s1";
const div = document.createElement("div");
div.className = "main-container";
const wrapper = document.createElement("div");
wrapper.className = "projects-wrapper";
div.appendChild(wrapper);

const h1 = document.createElement("h1");
h1.innerText = "Projects";
githubProjects.appendChild(div);
div.appendChild(h1);

export const showD = async () => {
  try {
    const response = await fetchUser();
    response.forEach((element) => {
      console.log(element.name);
      const wrapper = document.createElement("div");
      wrapper.className = "project-wrapper";
      const name = document.createElement("div");
      name.className = "name";
      name.textContent = `${element.name}`;
      const date = document.createElement("div");
      date.className = "date";
      date.textContent = `${element.created_at}`;
      const link = document.createElement("div");
      link.className = "link";
      link.textContent = `${element.homepage}`;
      wrapper.append(date, name, link);
      div.appendChild(wrapper);
    });

    console.log(response);
    console.log(response[1].name);
    console.log(response[1].created_at);
    console.log(response[1].homepage);
  } catch (error) {
    console.log(error);
  }
};

// export const showDi = async () => {
//     try {
//       const response = await fetchUser();
//       response.forEach((element) => {

//           const date = document.createElement("div");
//           date.className = "date";
//           date.textContent = `${element.created_at}`;
//         //   date.textContent = `${element.created_at}`;
//         //   const link = document.createElement("div");
//         //   link.className = "link";
//         //   link.textContent = `${element.homepage}`;

//         wrapper.append(date);
//         div.appendChild(wrapper);
//       });

showD();
// showDi();
