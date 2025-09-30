import { createNavMenu } from "/js/navmenu.js";
import { createHeader } from "/js/topbar.js";

function createNavigationElements() {
  createNavMenu();
  createHeader();
}

window.addEventListener("load", createNavigationElements);
