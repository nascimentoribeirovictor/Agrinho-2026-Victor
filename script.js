
const contador = document.getElementById("contador");

let valor = 0;

const intervalo = setInterval(() => {

valor += 10;

contador.textContent = valor;

if(valor >= 500){
clearInterval(intervalo);
}

},30);

document.getElementById("btnExplorar")
.addEventListener("click", () => {

document.getElementById("sobre")
.scrollIntoView({
behavior:"smooth"
});

});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const topo = card.getBoundingClientRect().top;

if(topo < window.innerHeight - 100){

card.classList.add("aparecer");

}

});

});
