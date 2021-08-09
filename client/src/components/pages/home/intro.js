export const intro = document.createElement("section");
intro.className = "s2";

const div = document.createElement("div");
div.className = "main-container";

const wrapper = document.createElement("div");
wrapper.className = "intro-wrapper";
div.appendChild(wrapper);

const nav = document.createElement("div");
nav.className = "nav-wrapper";

const menu = document.createElement("ul");
menu.id = "navigation";
const projects = document.createElement("li");
projects.textContent = "Projects";
menu.appendChild(projects);
const contact = document.createElement("li");
contact.textContent = "Contact";
menu.appendChild(contact);

const photo = document.createElement("div");
photo.className = "left-column";
const img = document.createElement("img");
img.id = "profile-pic";
img.setAttribute("src", "../client/public/dudes.png");
photo.appendChild(img);

const about = document.createElement("div");
about.className = "right-column";
const p = document.createElement("p");
p.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
about.appendChild(p);

intro.append(div);
div.appendChild(wrapper);
wrapper.append(nav, photo, about);
nav.appendChild(menu);
