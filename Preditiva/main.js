let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('escuro')
    body.classList.toggle('escuro')
})