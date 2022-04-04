let prato;
let precoPrato;
let bebida;
let precoBebida;
let sobremesa;
let precoSobremesa;
let precoTotal;

function pratoPrincipal(elemento) {
  let escolha = document.querySelector(".prato-principal.green-border");
  let checking = document.querySelector(".prato-principal .check.green-icon");
  if ((escolha && checking) !== null) {
    escolha.classList.toggle("green-border");
    checking.classList.toggle("green-icon");
  }
  elemento.classList.toggle("green-border");

  prato = elemento.querySelector("h4").innerHTML;
  precoPrato = elemento.querySelector("div > p").innerHTML;

  let checkIcon = document.querySelector(
    ".prato-principal.green-border .check"
  );
  checkIcon.classList.toggle("green-icon");

  let primeiro = document.querySelector(".prato-principal.green-border");
  let segundo = document.querySelector(".bebidas.green-border");
  let terceiro = document.querySelector(".sobremesas.green-border");

  if (primeiro !== null) {
    if (segundo !== null) {
      if (terceiro !== null) {
        let close = document.querySelector(".botao-fechamento");
        close.innerHTML = "Fechar pedido";
        close.classList.add("green-button");
      }
    }
  }
}

function bebidaPrincipal(elemento) {
  let escolha = document.querySelector(".bebidas.green-border");
  let checking = document.querySelector(".bebidas .check.green-icon");
  if ((escolha && checking) !== null) {
    escolha.classList.toggle("green-border");
    checking.classList.toggle("green-icon");
  }
  elemento.classList.toggle("green-border");

  bebida = elemento.querySelector("h4").innerHTML;
  precoBebida = elemento.querySelector("div > p").innerHTML;

  let checkIcon = document.querySelector(".bebidas.green-border .check");
  checkIcon.classList.toggle("green-icon");

  let primeiro = document.querySelector(".prato-principal.green-border");
  let segundo = document.querySelector(".bebidas.green-border");
  let terceiro = document.querySelector(".sobremesas.green-border");

  if (primeiro !== null) {
    if (segundo !== null) {
      if (terceiro !== null) {
        let close = document.querySelector(".botao-fechamento");
        close.innerHTML = "Fechar pedido";
        close.classList.add("green-button");
      }
    }
  }
}

function sobremesaPrincipal(elemento) {
  let escolha = document.querySelector(".sobremesas.green-border");
  let checking = document.querySelector(".sobremesas .check.green-icon");
  if ((escolha && checking) !== null) {
    escolha.classList.toggle("green-border");
    checking.classList.toggle("green-icon");
  }
  elemento.classList.toggle("green-border");

  sobremesa = elemento.querySelector("h4").innerHTML;
  precoSobremesa = elemento.querySelector("div > p").innerHTML;

  let checkIcon = document.querySelector(".sobremesas.green-border .check");
  checkIcon.classList.toggle("green-icon");

  let primeiro = document.querySelector(".prato-principal.green-border");
  let segundo = document.querySelector(".bebidas.green-border");
  let terceiro = document.querySelector(".sobremesas.green-border");

  if (primeiro !== null) {
    if (segundo !== null) {
      if (terceiro !== null) {
        let close = document.querySelector(".botao-fechamento");
        close.innerHTML = "Fechar pedido";
        close.classList.add("green-button");
      }
    }
  }
}

function finalizarPedido() {
  precoTotal =
    (Number(precoPrato.replace(/\D/g, "")) +
      Number(precoBebida.replace(/\D/g, "")) +
      Number(precoSobremesa.replace(/\D/g, ""))) /
    100;
  precoTotal = precoTotal.toFixed(2).toString();

  let mensagem;

  mensagem =
    "Olá, gostaria de fazer o pedido: " +
    "\n- Prato: " +
    prato +
    "\n- Bebida: " +
    bebida +
    "\n- Sobremesa: " +
    sobremesa +
    "\nTotal: R$" +
    precoTotal;

  window.open(
    `https://wa.me/5519989298778?text=${encodeURIComponent(mensagem)}`
  );
}