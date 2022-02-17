function criarTarefa() {
    let botao = document.getElementById('criar-tarefa');
        /* console.log(lista); */
    botao.addEventListener('click', function() {
        let lista = document.getElementById('lista-tarefas');
        let itemLista = document.createElement('li');
        //pra deixar lista cinza
        itemLista.addEventListener('click', function() {
            itemLista.style.backgroundColor = 'rgb(128, 128, 128)';
        })
        //pra deixar riscado
        itemLista.addEventListener('dblclick', function() {
            if(itemLista.className !== 'completed') {
                itemLista.className = 'completed';
            } else {itemLista.className = '';
        }
        })
        let imput = document.querySelector('input');
        itemLista.innerText = imput.value
        imput.value = '';
        lista.appendChild(itemLista);

        //para apagar linhas
        let botaoApaga = document.querySelector('#apaga-tudo');
        botaoApaga.addEventListener('click', function() {
            itemLista.remove();
        })

        let botaoConcluidas = document.querySelector('#remover-finalizados');
        botaoConcluidas.addEventListener('click', function() {
            if (itemLista.className === 'completed') {
                itemLista.remove();
            }
        })
    }) // tive explicação na mentoria!!!!
}
criarTarefa();
