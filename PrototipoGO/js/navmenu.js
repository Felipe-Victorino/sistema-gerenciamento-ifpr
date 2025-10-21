const textlines = [
  [
    { text: "Catálogo de itens", link: "catalogoItens.html" },
    { text: "Novo Empréstimo", link: "fichaEmprestimo.html" },
    { text: "Verificar Empréstimo", link: "#" },
  ],
  [{ text: "Catálogo de itens", link: "#" }],
];

export function createNavMenu() {
  let menu = document.querySelector("#nav-buttons");
  console.log("Navigation: Success");
  menu.appendChild(createNavButton("#menuEmprestimos", "Empréstimos"));
  menu.appendChild(createNavCollapseSection(0));
  menu.appendChild(createNavButton("#menuAchados", "Achados e Perdidos"));
  menu.appendChild(createNavCollapseSection(1));
}

function createNavButton(dataTarget, text) {
  let button = document.createElement("div");
  button.classList.add("nav-item", "w-100", "text-start", "fw-bold", "p-2");
  // button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", dataTarget);
  button.innerHTML = text;
  return button;
}

function createNavCollapseSection(sectiontype) {
  let collapse = document.createElement("div");
  // collapse.classList.add("collapse");
  collapse.setAttribute("id", "menuEmprestimos");
  collapse.setAttribute("class", "p-2");

  let ul = document.createElement("ul");
  ul.classList.add("nav", "flex-column", "ms-3", "gap-2");

  for (let index = 0; index < textlines[sectiontype].length; index++) {
    ul.appendChild(createNavListLine(index, sectiontype));
  }

  collapse.appendChild(ul);

  return collapse;
}

function createNavListLine(index, sectiontype) {
  let obj = textlines[sectiontype][index];
  let li = document.createElement("button");
  li.classList.add("nav-item", "btn");

  let anchor = document.createElement("a");
  anchor.classList.add("nav-link", "text-black");
  anchor.innerHTML = obj.text;
  anchor.setAttribute("href", obj.link);

  li.appendChild(anchor);

  return li;
}
