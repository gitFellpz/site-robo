 const btnRBC = document.getElementById('btn11')
const btnNEXT = document.getElementById('btn22')

btnRBC.addEventListener('click', function(){

    //ADD
    const boxRBC = document.querySelectorAll(".boxesrbc")
    boxRBC[0].classList.add('selecionado')

    //ADD formatação no selecionado
    const btnRBC2 = document.querySelectorAll(".btn1")
    btnRBC2[0].classList.add('selecionado2')

    //REMOVE
    const boxNEXT = document.querySelectorAll(".boxesnext")
    boxNEXT[0].classList.remove('selecionado')

    //REMOVE formatação no selecionado
    const btnNEXT2 = document.querySelectorAll(".btn2")
    btnNEXT2[0].classList.remove('selecionado2')

})
btnNEXT.addEventListener('click', function(){
    //ADD
    const boxNEXT = document.querySelectorAll(".boxesnext")
    boxNEXT[0].classList.add('selecionado')

    //ADD formatação no selecionado
    const btnNEXT2 = document.querySelectorAll(".btn2")
    btnNEXT2[0].classList.add('selecionado2')

    //REMOVE
    const boxRBC = document.querySelectorAll(".boxesrbc")
    boxRBC[0].classList.remove('selecionado')

    //REMOVE formatação no selecionado
    const btnRBC2 = document.querySelectorAll(".btn1")
    btnRBC2[0].classList.remove('selecionado2')


})