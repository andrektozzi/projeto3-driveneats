let prato
let bebida
let sobremesa
let valorPrato
let valorBebida
let valorSobremesa

function escolherFrango() {
  document.getElementById("frango").style.borderColor = "green";
  document.getElementById("carne").style.borderColor = "white";
  document.getElementById("macarrao").style.borderColor = "white";
  prato = "Frango"
  valorPrato = 14.90
}

function escolherCarne() {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("macarrao").style.borderColor = "white";
    prato = "Carne"
    valorPrato = 24.90
  }

  function escolherMacarrao() {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "white";
    document.getElementById("macarrao").style.borderColor = "green";
    prato = "Macarrao"
    valorPrato = 18.90
  }

  function escolherCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("cha").style.borderColor = "white";
    bebida = "Coca"
    valorBebida = 4.90
  }

  function escolherSuco() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("suco").style.borderColor = "green";
    document.getElementById("cha").style.borderColor = "white";
    bebida = "Suco"
    valorBebida = 6.90
  }

  function escolherCha() {
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("cha").style.borderColor = "green";
    bebida = "Cha"
    valorBebida = 5.90
  }

  function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("bolo").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "white";
    sobremesa = "Pudim"
    valorSobremesa = 7.90
  }

  function escolherBolo() {
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("bolo").style.borderColor = "green";
    document.getElementById("sorvete").style.borderColor = "white";
    sobremesa = "Bolo"
    valorSobremesa = 8.90
  }

  function escolherSorvete() {
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("bolo").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "green";
    sobremesa = "Sorvete"
    valorSobremesa = 5.90
  }

  function finalizarPedido() {
      let mensagem;

      mensagem = "Olá, gostaria de fazer o pedido: " +
    "\n- Prato: " + prato +
    "\n- Bebida: " + bebida +
    "\n- Sobremesa: " + sobremesa + 
    "\nTotal: R$" + Number(valorPrato + valorBebida + valorSobremesa).toFixed(2)

    window.open("https://wa.me/+5519992019243?text=" + mensagem)
  }