export function createHeader() {
  let header = document.querySelector("#header");
  header.classList.add(
    "header",
    "p-5",
    "py-3",
    "d-flex",
    "sticky",
    "align-items-center"
  );

  header.appendChild(createHeaderLogo());
  header.appendChild(createHeaderTitle());
}

function createHeaderLogo() {
  let logo = document.createElement("div");
  logo.classList.add(
    "av-frame",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );

  let image = document.createElement("img");
  image.setAttribute("src", "img/Instituto_Federal_Marca_2015.svg.png");
  image.setAttribute("alt", "Logo do IFPR");
  image.setAttribute("class", "avatar");

  logo.appendChild(image);

  return logo;
}

function createHeaderTitle() {
  let title = document.createElement("h5");

  title.classList.add("ms-3");

  let link = document.createElement("a");
  link.classList.add("link-underline-opacity-0", "link-light");
  link.setAttribute("href", "index.html");
  link.innerHTML =
    "IFPR - EMPRÉSTIMOS <br/>\
          E ACHADOS";

  title.appendChild(link);

  return title;
}
