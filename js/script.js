const menuBotao = document.querySelector('#menu')
const menuLista = document.querySelector('.lista__menu')

menuBotao.addEventListener('click', function(){
    menuLista.classList.toggle('mostrar')
})