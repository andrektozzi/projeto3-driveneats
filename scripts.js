function pratoPrincipal(elemento) {
    let escolha = document.querySelector(".prato-principal.green-border");
    if (escolha !== null) {
      escolha.classList.toggle("green-border");
    }
    elemento.classList.toggle("green-border");
  
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
  
  function bebida(elemento) {
    let escolha = document.querySelector(".bebidas.green-border");
    if (escolha !== null) {
      escolha.classList.toggle("green-border");
    }
    elemento.classList.toggle("green-border");
  
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
  
  function sobremesa(elemento) {
    let escolha = document.querySelector(".sobremesas.green-border");
    if (escolha !== null) {
      escolha.classList.toggle("green-border");
    }
    elemento.classList.toggle("green-border");
  
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
    
    let mensagem;
   

    mensagem = "Olá, gostaria de fazer o pedido: " +
    "\n- Prato: " + prato +
    "\n- Bebida: " + bebida +
    "\n- Sobremesa: " + sobremesa + 
    "\nTotal: R$" + Number(valorPrato + valorBebida + valorSobremesa).toFixed(2)

    window.open("https://wa.me/+5519992019243?text=" + mensagem)
  }