const jogadas = document.querySelectorAll(".tesoura, .papel, .pedra");
let Ponts1 = document.querySelector(".number1");
let Ponts2 = document.querySelector(".number2");
let result = document.querySelector(".resultado");
let voce = document.querySelector(".voce");
let oponente = document.querySelector(".oponente");
let vencedor = document.querySelector(".vencedor");

const resultados = {
  tesoura: ["✌️", "✊", "✋"],
  papel: ["✋", "✌️", "✊"],
  pedra: ["✊", "✋", "✌️"]
};

const mensagens = ["Empate", "Oponente venceu", "Você venceu"];
const margens = ["-41px", "-100px", "-70px"];
const paddings = ["95px", "43px", "65px"];

jogadas.forEach((jogada) => {
  jogada.addEventListener("click", () => {
    let mathrandom = Math.floor(Math.random() * 3);
    let escolha = jogada.classList[0];
    
    Ponts1.innerHTML = mathrandom === 2 ? parseInt(Ponts1.innerHTML) + 1 : Ponts1.innerHTML;
    Ponts2.innerHTML = mathrandom === 1 ? parseInt(Ponts2.innerHTML) + 1 : Ponts2.innerHTML;
    
    
    voce.innerHTML = resultados[escolha][0];
    oponente.innerHTML = resultados[escolha][mathrandom];
    

    vencedor.innerHTML = mensagens[mathrandom];
    vencedor.style.marginLeft = margens[mathrandom];
    result.style.paddingRight = paddings[mathrandom];
    result.style.display = "flex";
  });
});

