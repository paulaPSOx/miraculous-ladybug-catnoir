const personagens = document.querySelectorAll('.personagem');
const imagemPersonagemGrande = document.querySelector('.personagem-grande');
const nomePersonagem = document.getElementById('nome-personagem');
const descricaoPersonagem = document.getElementById('descricao-personagem');

// Função para remover a seleção atual
function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.personagem.selecionado');
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove('selecionado');
  }
}

// Adiciona o evento de clique para cada vilão
personagens.forEach((personagem) => {
  personagem.addEventListener('click', () => {
    removerSelecaoDoPersonagem();
    personagem.classList.add('selecionado');

    const id = personagem.getAttribute('id');
    const nome = personagem.getAttribute('data-name');
    const descricao = personagem.getAttribute('data-description');

    // Atualiza a imagem grande com o caminho dos vilões
    imagemPersonagemGrande.setAttribute('src', `src/imagens/personagens/${id}_fundo.png`);
    nomePersonagem.textContent = nome;
    descricaoPersonagem.textContent = descricao;
  });
});
