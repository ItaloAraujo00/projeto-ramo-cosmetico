const menuBotao = document.querySelector('#menu')
const menuLista = document.querySelector('.lista__menu')
const mostrarCardsBtn = document.querySelector('#mostrar-cards-btn')
const cardsWrapper = document.querySelector('#cards-wrapper')
const esconderCardBtns = document.querySelectorAll('.esconder-card-btn')


menuBotao.addEventListener('click', function(){
    menuLista.classList.toggle('mostrar')
})

mostrarCardsBtn.addEventListener('click', function() {
    const cards = cardsWrapper.querySelectorAll('.produtos__card.oculto');
    cards.forEach(card => card.classList.remove('oculto'));
})

esconderCardBtns.forEach(button =>{
    button.addEventListener('click', function() {
        const card = this.parentElement;
        card.classList.add('oculto');
    })
})