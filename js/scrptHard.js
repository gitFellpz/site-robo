const btnAvancar = document.getElementById("btnAvancar")
const btnVoltar = document.getElementById("btnVoltar")

const lista = document.querySelectorAll(".componente")
let componenteAtual = 0

btnAvancar.addEventListener('click', function(){ 
    if(componenteAtual === lista.length - 1) return

    const componenteSelecionado = document.querySelector(".selecionado")
    componenteSelecionado.classList.remove("selecionado")

    const componentes = document.querySelectorAll(".componente")

    componenteAtual++
    componentes[componenteAtual].classList.add('selecionado')


})
btnVoltar.addEventListener('click', function(){
    if(componenteAtual < 1) return

    const componenteSelecionado = document.querySelector(".selecionado")
    componenteSelecionado.classList.remove("selecionado")

    componenteAtual--

    const componentes = document.querySelectorAll(".componente")
    componentes[componenteAtual].classList.add('selecionado')




})



const btnAvancar2 = document.getElementById("btnAvancar2")
const btnVoltar2 = document.getElementById("btnVoltar2")
const lista2 = document.querySelectorAll(".video")

let videoAtual = 0

btnAvancar2.addEventListener('click', function(){ 
    if(videoAtual === lista2.length - 1) return

    const videoSelecionado = document.querySelector(".selecionado2")
    videoSelecionado.classList.remove("selecionado2")

    const video = document.querySelectorAll(".video")

    videoAtual++
    video[videoAtual].classList.add('selecionado2')


})

btnVoltar2.addEventListener('click', function(){
    if(videoAtual < 1) return

    const videoSelecionado = document.querySelector(".selecionado2")
    videoSelecionado.classList.remove("selecionado2")

    videoAtual--

    const video = document.querySelectorAll(".video")
    video[videoAtual].classList.add('selecionado2')
})