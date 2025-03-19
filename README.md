# Amigo Secreto 🎁

Este é um projeto simples para gerenciar e sortear amigos secretos. O código é escrito em **JavaScript**, **HTML** e **CSS**. E pode ser executado em um navegador web.

## Funcionalidades ✨

- **Adicionar Amigos**: Insira o nome de um amigo no campo de texto e clique em "Adicionar" para adicioná-lo à lista.
- **Sortear Amigo Secreto**: Clique em "Sortear" para escolher aleatoriamente um amigo da lista.
- **Reiniciar sorteio**: Clique em "Reiniciar Sorteio" para remover todos os amigos da lista e recomeçar o sorteio.

## Como Usar 🚀

1. **Adicionar Amigos**:
   - Digite o nome de um amigo no campo de texto.
   - Clique no botão "Adicionar" para adicionar o nome à lista.

2. **Sortear Amigo Secreto**:
   - Após adicionar os amigos, clique no botão "Sortear" para escolher aleatoriamente um amigo da lista.
   - O nome do amigo sorteado será exibido na tela.

3. **Reiniciar sorteio**:
   - Para recomeçar o sorteio, clique no botão "Reiniciar sorteio" para remover todos os amigos da lista.

## Código 

O código JavaScript está estruturado da seguinte forma:

- **adicionarAmigo()**: Adiciona um amigo à lista.
- **sortearAmigo()**: Sorteia um amigo secreto da lista.
- **limparLista()**: Recomeça o sorteio e remove os nomes da lista.

## Link

Link do deploy do projeto no **Vercel**.

=> https://amigo-secreto-seven-iota.vercel.app/

## Exemplo de Uso

```html
<input type="text" placeholder="Digite o nome do amigo">
<button onclick="adicionarAmigo()">Adicionar</button>
<button onclick="sortearAmigo()">Sortear Amigo</button>
<button onclick="limparLista()">Reiniciar sorteio</button>

<ul id="listaAmigos"></ul>
<div id="resultado"></div>