function criarTarefa() {
    let botao = document.getElementById('criar-tarefa');
    
    
        /* console.log(lista); */
    botao.addEventListener('click', function() {
        let lista = document.getElementById('lista-tarefas');
        let itemLista = document.createElement('li');
        let imput = document.querySelector('input');
        itemLista.innerText = imput.value
        imput.value = '';

        lista.appendChild(itemLista);
    }) // tive explicação na mentoria!!!!
}
criarTarefa();