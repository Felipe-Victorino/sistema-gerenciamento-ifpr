let modalbtn = document.querySelector("#modal-button");

modalbtn.addEventListener("click", loadFormResults);

function loadFormResults() {
  let formList = document.querySelectorAll("#form-info");
  let infoList = document.querySelectorAll("#input-group-text");

  let modalbody = document.querySelector(".modal-results");
  if (isListEmpty(formList) == true) {
    console.log("Lista vazia");
    return;
  }
  console.log("Success!");
  if (isListValuesEmpty(formList) == true) {
    console.log("Conteúdo da Lista vazio");
    return;
  }
  console.log("Success!");
  let textvalues = "";

  let selectStrings = [
    "Engenharia de Software",
    "Licenciatura em Química",
    "Engenharia Elétrica",
  ];

  for (let index = 0; index < formList.length; index++) {
    let elementForm = formList[index];
    let elementInfo = infoList[index];
    console.log(elementForm.value);
    if (index == 2) {
      textvalues =
        textvalues +
        elementInfo.innerHTML +
        " " +
        selectStrings[elementForm.value] +
        "<br>";
    } else {
      textvalues =
        textvalues + elementInfo.innerHTML + " " + elementForm.value + "<br>";
    }
  }

  modalbody.innerHTML = textvalues;
}

function isListValuesEmpty(list) {
  list.forEach((element) => {
    if (element.value == null || element.value == "") {
      return true;
    }
  });
  return false;
}

function isListEmpty(list) {
  return list.length == 0;
}
