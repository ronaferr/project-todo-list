function criarTarefa() {
    let botao = document.getElementById('criar-tarefa');
    // para criar tarefa
    botao.addEventListener('click', function () {
        let lista = document.querySelector('#lista-tarefas');
        let itemLista = document.createElement('li');
        let imput = document.querySelector('input');
        itemLista.innerText = imput.value
        imput.value = '';

        //pra deixar lista cinza
        itemLista.addEventListener('click', function () {
            let selecionado = document.querySelector('.selected');
            if (selecionado !== null) {
                selecionado.className = '';
                selecionado.style.backgroundColor = 'white';
            }
            itemLista.className = 'selected';
            itemLista.style.backgroundColor = 'rgb(128, 128, 128)';

        })
    
        //pra deixar riscado
        itemLista.addEventListener('dblclick', function () {
            if (itemLista.className !== 'completed') {
                itemLista.className = 'completed';
            } else {
                itemLista.className = '';
            }         
        })

        lista.appendChild(itemLista);
        
        //para apagar linhas
        let botaoApaga = document.querySelector('#apaga-tudo');
        botaoApaga.addEventListener('click', function () {
            itemLista.remove();
        })

        //para apagar concluidas
        let botaoConcluidas = document.querySelector('#remover-finalizados');
        botaoConcluidas.addEventListener('click', function () {
            if (itemLista.className === 'completed') {
                itemLista.remove();
            }
        })
    }) // tive explicação na mentoria!!!!
}
criarTarefa();
