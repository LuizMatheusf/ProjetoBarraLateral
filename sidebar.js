let menu = document.querySelector('#menu');
let sidebar = document.querySelector('.sidebar');
let search = document.querySelector('.bx-search');
let conteudo = document.querySelector('.conteudo');

menu.onclick = function(){
    sidebar.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
}
search.onclick = function(){
    sidebar.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
}
