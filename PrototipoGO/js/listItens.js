const itens = [
  { id: 1, nome: "Calculadora", qtde: 5 },
  { id: 2, nome: "Caneta", qtde: 25 },
  { id: 2, nome: "Lápis", qtde: 20 },
  { id: 4, nome: "Grampeador", qtde: 4 },
  {id: 5, nome: "Papel A4", qtde: 50}
];

const lista = document.getElementById("lista-itens");
const campoFiltro = document.getElementById("campo-filtro");
const btnBuscar = document.getElementById("btn-buscar");

function renderizarItensList(filtro = "") {
  lista.innerHTML = ""; // limpa antes de renderizar

  itens
    .filter((item) => item.nome.toLowerCase().includes(filtro.toLowerCase()))
    .forEach((item) => {
      const li = document.createElement("div");
      li.className = "list-group-item w-100 d-flex justify-content-between ";

      const nome = document.createElement("span");
      nome.textContent = item.nome;
      nome.className = "conteudo ms-1";

      const estoque = document.createElement("span");
      estoque.textContent = item.qtde;
      nome.className = "conteudo align-content-center";

      const add = document.createElement("button");
      add.textContent = "Adicionar";
      add.className = "btn ms-auto";

      const rem = document.createElement("button");
      rem.textContent = "Remover";
      rem.className = "btn ms-auto";

      const edi = document.createElement("button");
      edi.textContent = "Editar";
      edi.className = "btn ms-auto";

      li.append(nome, estoque, add, rem, edi);
      lista.appendChild(li);
    });
}
// renderiza tudo no início
renderizarItensList();

btnBuscar.addEventListener("click", () => {
  const valor = campoFiltro.value;
  renderizarItensList(valor);
});
