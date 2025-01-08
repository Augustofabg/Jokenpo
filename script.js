const jogadas = document.querySelectorAll(".tesoura, .papel, .pedra");
let Ponts1 = document.querySelector(".number1");
let Ponts2 = document.querySelector(".number2");

jogadas.forEach((jogada) => {
  jogada.addEventListener("click", () => {
    if (jogada.classList.contains("tesoura")) {
      mathrandom = Math.floor(Math.random() * 3);
      if (mathrandom == 0) {
        Ponts1.innerHTML = parseInt(Ponts1.innerHTML) + 0;
        Ponts2.innerHTML = parseInt(Ponts2.innerHTML) + 0;
        voce.innerHTML = "✌️";
        oponente.innerHTML = "✌️";
        vencedor.innerHTML = "Empate";
        vencedor.style.marginLeft = "-41px";
        result.style.paddingRight = "95px";
        result.style.display = "flex";
      } else if (mathrandom == 1) {
        Ponts2.innerHTML = parseInt(Ponts2.innerHTML) + 1;
        voce.innerHTML = "✌️";
        oponente.innerHTML = "✊";
        vencedor.innerHTML = "Oponente venceu";
        vencedor.style.marginLeft = "-100px";
        result.style.paddingRight = "43px";
        result.style.display = "flex";
      } else {
        Ponts1.innerHTML = parseInt(Ponts1.innerHTML) + 1;
        voce.innerHTML = "✌️";
        oponente.innerHTML = "✋";
        vencedor.innerHTML = "Você venceu";
        vencedor.style.marginLeft = "-72px";
        result.style.paddingRight = "65px";
        result.style.display = "flex";
      }
    }

    if (jogada.classList.contains("papel")) {
      mathrandom = Math.floor(Math.random() * 3);
      if (mathrandom == 0) {
        Ponts1.innerHTML = parseInt(Ponts1.innerHTML) + 0;
        Ponts2.innerHTML = parseInt(Ponts2.innerHTML) + 0;
        voce.innerHTML = "✋";
        oponente.innerHTML = "✋";
        vencedor.innerHTML = "Empate";
        vencedor.style.marginLeft = "-41px";
        result.style.paddingRight = "95px";
        result.style.display = "flex";
      } else if (mathrandom == 1) {
        Ponts2.innerHTML = parseInt(Ponts2.innerHTML) + 1;
        voce.innerHTML = "✋";
        oponente.innerHTML = "✌️";
        vencedor.innerHTML = "Oponente venceu";
        vencedor.style.marginLeft = "-100px";
        result.style.paddingRight = "43px";
        result.style.display = "flex";
      } else {
        Ponts1.innerHTML = parseInt(Ponts1.innerHTML) + 1;
        voce.innerHTML = "✋";
        oponente.innerHTML = "✊";
        vencedor.innerHTML = "Você venceu";
        vencedor.style.marginLeft = "-72px";
        result.style.paddingRight = "65px";
        result.style.display = "flex";
      }
    }

    if (jogada.classList.contains("pedra")) {
      mathrandom = Math.floor(Math.random() * 3);
      if (mathrandom == 0) {
        Ponts1.innerHTML = parseInt(Ponts1.innerHTML) + 0;
        Ponts2.innerHTML = parseInt(Ponts2.innerHTML) + 0;
        voce.innerHTML = "✊";
        oponente.innerHTML = "✊";
        vencedor.innerHTML = "Empate";
        vencedor.style.marginLeft = "-41px";
        result.style.paddingRight = "95px";
        result.style.display = "flex";
        
      } else if (mathrandom == 1) {
        Ponts2.innerHTML = parseInt(Ponts2.innerHTML) + 1;
        voce.innerHTML = "✊";
        oponente.innerHTML = "✋";
        vencedor.innerHTML = "Oponente venceu";
        vencedor.style.marginLeft = "-100px";
        result.style.paddingRight = "43px";
        result.style.display = "flex";
      } else {
        Ponts1.innerHTML = parseInt(Ponts1.innerHTML) + 1;
        voce.innerHTML = "✊";
        oponente.innerHTML = "✌️";
        vencedor.innerHTML = "Você venceu";
        vencedor.style.marginLeft = "-72px";
        result.style.paddingRight = "65px";
        result.style.display = "flex";
      }
    }
  });
});

let = result = document.querySelector(".resultado");
let = voce = document.querySelector(".voce");
let = oponente = document.querySelector(".oponente");
let = vencedor = document.querySelector(".vencedor");
