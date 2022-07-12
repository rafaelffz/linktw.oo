let btnMenu = document.querySelector('#btn-menu')
let bgt = document.querySelector('.bgthemes')
let b = document.body


function toggleMenu () {
    bgt.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)

function bluet () {
    b.classList.remove('darkblue', 'pink', 'darkpink')
    b.classList.add('blue')
    document.querySelector('#btn-menu').click()
}

function darkbt () {
    b.classList.remove('blue', 'pink', 'darkpink')
    b.classList.add('darkblue')
    document.querySelector('#btn-menu').click()
}

function pinkt () {
    b.classList.remove('blue', 'darkblue', 'darkpink')
    b.classList.add('pink')
    document.querySelector('#btn-menu').click()
}

function darkpt () {
    b.classList.remove('blue', 'darkblue', 'pink')
    b.classList.add('darkpink')
    document.querySelector('#btn-menu').click()
}