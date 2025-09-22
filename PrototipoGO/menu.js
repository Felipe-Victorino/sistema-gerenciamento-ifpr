function createNavMenu() {
  let menu = document.querySelector("#nav-buttons");
  console.log("Success");
  menu.appendChild(createNavButton("#menuEmprestimos", "Empréstimos"));
  menu.appendChild(createNavButton("#menuAchados", "Achados e Perdidos"))
}

function createNavButton(dataTarget, text) {
  let button = document.createElement("button");
  button.classList.add("btn", "w-100", "text-start", "fw-bold", "p-2");
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", dataTarget);
  button.innerHTML = text;
  return button;
}
