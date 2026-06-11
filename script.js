
VICTOR GABRIEL DO NASCIMENTO RIBEIRO <nascimento.ribeiro.victor@escola.pr.gov.br>
10:38 (há 0 minuto)
para mim

document.getElementById("explorar").addEventListener("click", () => {
document.getElementById("indicadores").scrollIntoView({
behavior:"smooth"
});
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

themeBtn.textContent =
document.body.classList.contains("dark")
? "☀️"
: "🌙";

});

function animarContador(id, final, velocidade){

let valor = 0;

const contador = document.getElementById(id);

const intervalo = setInterval(() => {

valor++;

contador.textContent = valor;

if(valor >= final){
clearInterval(intervalo);
}

}, velocidade);

}

animarContador("prod",500,5);
animarContador("agua",85,20);
animarContador("carbono",70,20);
animarContador("energia",95,15);

function mostrarAno(ano){

const info = document.getElementById("infoAno");

const dados = {

2025:"Agricultura de precisão e drones começam a dominar o campo.",

2035:"Máquinas autônomas realizam grande parte da produção.",

2045:"Inteligência Artificial controla fazendas inteiras.",

2050:"Produção sustentável, neutra em carbono e altamente tecnológica."

};

info.innerHTML = dados[ano];

}

function simular(){

const drones =
parseInt(document.getElementById("drones").value);

const ia =
parseInt(document.getElementById("ia").value);

const solar =
parseInt(document.getElementById("solar").value);

const agua =
parseInt(document.getElementById("aguaRange").value);

const produtividade =
Math.floor((drones+ia+solar+agua)/4);

let classe;

if(produtividade >= 80){
classe = "🌱 Fazenda do Futuro";
}
else if(produtividade >= 50){
classe = "🚜 Fazenda Moderna";
}
else{
classe = "🌾 Fazenda Tradicional";
}

document.getElementById("resultado").innerHTML = `
<h3>Resultado</h3>

<p>Produtividade: ${produtividade}%</p>

<p>Eficiência sustentável: ${produtividade}%</p>

<p>${classe}</p>
`;

}

function respostaQuiz(opcao){

const resultado =
document.getElementById("quizResultado");

if(opcao === "d"){

resultado.innerHTML =
"✅ Correto! IA, drones e robótica trabalharão juntos no agro de 2050.";

}
else{

resultado.innerHTML =
"❌ Não exatamente. A resposta correta é: Todas as anteriores.";

}

}

const curiosidades = [

"🌎 O Brasil poderá alimentar mais de 1 bilhão de pessoas.",

"☀️ Mais de 70% das fazendas poderão usar energia renovável.",

"🤖 Robôs poderão operar 24 horas por dia.",

"💧 Sistemas inteligentes reduzirão drasticamente o desperdício de água.",

"🛰️ Satélites e drones monitorarão lavouras em tempo real."

];

let indice = 0;

setInterval(() => {

document.getElementById("curiosidade").innerHTML =
curiosidades[indice];

indice++;

if(indice >= curiosidades.length){
indice = 0;
}

},3000);

window.addEventListener("scroll", () => {

const scrollTop =
document.documentElement.scrollTop;

const altura =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progresso =
(scrollTop / altura) * 100;

document.querySelector(".progress-bar")
.style.width = progresso + "%";

});
