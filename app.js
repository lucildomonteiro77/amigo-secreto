let amigosInseridos = [];
let amigosDisponiveis = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim(); // Remove espaços em branco

    if (nome === '') {
        alert("Você não pode deixar o espaço vazio!");
        return;
    }

    if (amigosInseridos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigosInseridos.push(nome);
    amigosDisponiveis.push(nome); // Adiciona também à lista de disponíveis
    limparCampo();
    atualizarLista();
    console.log('Nome adicionado: ', nome);
}

// Função para limpar o campo de entrada
function limparCampo() {
    document.querySelector('input').value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    lista.innerHTML = ''; // Limpa a lista existente

    amigosInseridos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigosDisponiveis.length === 0) {
        alert('Todos os amigos já foram sorteados! Reinicie o sorteio.');
        return;
    }

    if (amigosInseridos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return;
    }

    // Sorteia um amigo disponível
    let indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    let amigoSorteado = amigosDisponiveis[indiceSorteado];

    // Remove o amigo sorteado da lista de disponíveis
    amigosDisponiveis.splice(indiceSorteado, 1);

    // Exibe o resultado
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    amigosDisponiveis = [...amigosInseridos]; // Restaura a lista de disponíveis
    resultado.innerHTML = '';
    alert('Sorteio reiniciado! Todos os amigos estão disponíveis novamente.');
}

// Função para limpar a lista e recomeçar o sorteio
function limparLista() {
    amigosInseridos = [];
    amigosDisponiveis = [];
    atualizarLista();
    resultado.innerHTML = '';
}