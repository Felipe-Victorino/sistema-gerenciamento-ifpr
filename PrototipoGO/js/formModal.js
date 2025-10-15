let modalbtn = document.querySelector("#modal-button");

modalbtn.addEventListener("click", loadFormResults);

function loadFormResults() {
  let formList = document.querySelectorAll("#form-info");

  let modalbody = document.querySelector(".modal-body");
  if (isListEmpty(formList) == true) {
    console.log("Lista vazia");
    return;
  }

  let textvalues = "";

  for (let index = 0; index < formList.length; index++) {
    let element = formList[index];
    console.log(element.innerHTML);
  }

  console.log(formList);
}

function isListEmpty(list) {
  return list.length == 0;
}
