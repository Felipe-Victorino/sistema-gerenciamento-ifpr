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

  let textvalues = "";

  for (let index = 0; index < formList.length; index++) {
    let elementForm = formList[index];
    let elementInfo = infoList[index];
    console.log(elementInfo.innerHTML + elementForm.value);
    textvalues =
      textvalues + elementInfo.innerHTML + " " + elementForm.value + "<br>";
  }
  console.log(textvalues);

  modalbody.innerHTML = textvalues;
}

function isListEmpty(list) {
  return list.length == 0;
}
