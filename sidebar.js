let body = document.querySelector('body'),
    menu = document.querySelector('#menu'),
    sidebar = document.querySelector('.sidebar'),
    search = document.querySelector('.bx-search'),
    conteudo = document.querySelector('.content'),
    theme = document.querySelector('.theme'),
    moon_sun = document.querySelector('.moon_sun'),
    toggle = document.querySelector('.switch');
    
    menu.onclick = function(){
        sidebar.classList.toggle('active')
        conteudo.classList.toggle('active')
    }
    
    search.onclick = function(){
        sidebar.classList.toggle('active')
        conteudo.classList.toggle('active')
    }
    
    toggle.onclick = function(){ 
        body.classList.toggle('dark')
    }    
    
    theme.onclick = function(){ 
        body.classList.toggle('dark')
    }    
    
    moon_sun.onclick = function(){ 
        body.classList.toggle('dark')
    }    
