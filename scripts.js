function pratoPrincipal(elemento) {
    let escolha = document.querySelector(".prato-principal.green-border");
    let checking = document.querySelector(".prato-principal .check.green-icon");
    if ((escolha && checking) !== null) {
      escolha.classList.toggle("green-border");
      checking.classList.toggle("green-icon");
    }
    elemento.classList.toggle("green-border");

    let checkIcon = document.querySelector(".prato-principal.green-border .check");
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
  
  function bebida(elemento) {
    let escolha = document.querySelector(".bebidas.green-border");
    let checking = document.querySelector(".bebidas .check.green-icon");
    if ((escolha && checking) !== null) {
      escolha.classList.toggle("green-border");
      checking.classList.toggle("green-icon");
    }
    elemento.classList.toggle("green-border");

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
  
  function sobremesa(elemento) {
    let escolha = document.querySelector(".sobremesas.green-border");
    let checking = document.querySelector(".sobremesas .check.green-icon");
    if ((escolha && checking) !== null) {
      escolha.classList.toggle("green-border");
      checking.classList.toggle("green-icon");
    }
    elemento.classList.toggle("green-border");

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