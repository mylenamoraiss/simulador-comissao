function calcular() {
  let valor = document.getElementById("valor").value;

  if (valor === "") {
    document.getElementById("resultado").innerText = "Digite um valor!";
    return;
  }

  valor = Number(valor);
  let comissao = 0;

  if (valor >= 15000 && valor <= 16499) {
    comissao = 400;
  } else if (valor >= 16500 && valor <= 17999) {
    comissao = 450;
  } else if (valor >= 18000 && valor <= 19999) {
    comissao = 500;
  } else if (valor >= 20000 && valor <= 21999) {
    comissao = 600;
  } else if (valor >= 22000 && valor <= 23999) {
    comissao = 650;
  } else if (valor >= 24000 && valor <= 25999) {
    comissao = 700;
  } else if (valor >= 26000 && valor <= 27999) {
    comissao = 800;
  } else if (valor >= 28000 && valor <= 30999) {
    comissao = 900;
  } else if (valor >= 31000) {
    comissao = 1000;
  } else {
    comissao = 0;
  }

  document.getElementById("resultado").innerText =
    "Comissão: R$ " + comissao;
}