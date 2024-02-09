const nome = document.querySelector("#nomeCompleto");

const txt = document.querySelector(".msgTxt");

function Nome() {
  console.log(nome.value);
  console.log(typeof nome);

  txt.innerHTML = `Ola ${nome.value}!`;

  if (nome.value.length < 4) {
    txt.innerHTML = "Digite o nome completo!";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome valido!";
    txt.style.color = "green";
  }
}
