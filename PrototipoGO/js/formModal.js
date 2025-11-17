let modalbtn = document.querySelector("#modal-button");

modalbtn.addEventListener("click", loadFormResults);

function isNameEmpty() {
  let nameField = document.querySelector("#nome-info");
  if (nameField.value == "") {
    return true;
  }
  return false;
}

function isRaEmpty() {
  let raField = document.querySelector("#ra-info");
  if (raField.value == "") {
    return true;
  }
  return false;
}

function isCourseEmpty() {
  let courseField = document.querySelector("#curso-info");
  if (courseField.value == undefined) {
    return true;
  }
  return false;
}

function isCelEmpty() {
  let celField = document.querySelector("#cel-info");
  if (celField.value == "") {
    return true;
  }
  return false;
}

function loadFormResults() {
  let formList = document.querySelectorAll(".form-info");
  let infoList = document.querySelectorAll("#input-group-text");

  let modalbody = document.querySelector(".modal-results");

  console.log("Success!");

  let textvalues = "";
  let selectStrings = [
    "Engenharia de Software",
    "Licenciatura em Química",
    "Engenharia Elétrica",
  ];

  console.log(isNameEmpty());
  console.log(isRaEmpty());
  console.log(isCourseEmpty());
  console.log(isCelEmpty());

  console.log(isNameEmpty() || isRaEmpty() || isCourseEmpty() || isCelEmpty())
  if (isNameEmpty() || isRaEmpty() || isCourseEmpty() || isCelEmpty()) {
    modalbody.className = "warning-text h1";
    modalbody.innerHTML =
      "Campo vazio, por favor preencher o formulário completamente";
    let btns = document.querySelector("#send-btn");
    btns.hidden = "true";

    let btnc =document.querySelector("#cancel-btn");
    btnc.innerHTML = "Ok"
  } else {
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
}
