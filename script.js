function criarTarefa() {
    let botao = document.getElementById('criar-tarefa');
        /* console.log(lista); */
    botao.addEventListener('click', function() {
        let lista = document.getElementById('lista-tarefas');
        let itemLista = document.createElement('li');
        //função para ficar cinza
        itemLista.addEventListener('click', function() {
                itemLista.style.backgroundColor = 'rgb(128, 128, 128)'
            
        })
        let imput = document.querySelector('input');
        itemLista.innerText = imput.value
        imput.value = '';

        lista.appendChild(itemLista);
    }) // tive explicação na mentoria!!!!
}
criarTarefa();

/* function changeColorItenList() {
    let itens = document.querySelectorAll('li');
    console.log(itens)
    if (itens.length > 0) {
            for (let i = 0; i <itens.length; i += 1) {
            itens[i].addEventListener('click', function() {
                itens[i].style.backgroundColor = 'gray'; 
            })
        }
    }    
}
changeColorItenList(); */