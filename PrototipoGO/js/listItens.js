 const itens = [
        { id: 1, nome: "calculadora", qtde: 4 },
        { id: 2, nome: "caneta", qtde: 4 },
        { id: 2, nome: "lapis", qtde: 4 },
        { id: 4, nome: "grampeador", qtde: 4 },
      ];

      const lista = document.getElementById("lista-itens");
      const campoFiltro = document.getElementById("campo-filtro");
      const btnBuscar = document.getElementById("btn-buscar");

      function renderizarItensList(filtro = "") {
        lista.innerHTML = ""; // limpa antes de renderizar

        itens
          .filter((item) =>
            item.nome.toLowerCase().includes(filtro.toLowerCase())
          )
          .forEach((item) => {
            const li = document.createElement("div");
            li.className = "list-group-item w-100 d-flex justify-content-between align-content-buttun";

            const nome = document.createElement('span');
            nome.textContent = item.nome;

            const estoque = document.createElement('span');
            estoque.textContent = item.qtde;

            const add = document.createElement("button");
            add.textContent = 'adicionar'
            add.className = "btn ms-auto"
            

            li.append(nome,estoque,add);
            lista.appendChild(li);
          });
      }
      // renderiza tudo no início
      renderizarItensList();

      btnBuscar.addEventListener("click", () => {
        const valor = campoFiltro.value;
        renderizarItensList(valor);
      });