const listaSelecaoKwamis = document.querySelectorAll(".kwami");
listaSelecaoKwamis.forEach(kwami => {
	kwami.addEventListener("click", () => {
		esconderCartaoKwami();
		const idKwamiSelecionado = mostrarCartaoKwamiSelecionado(kwami);
		desativarKwamiNaListagem();
		ativarKwamiSelecionadoNaListagem(idKwamiSelecionado);
	})
})

function ativarKwamiSelecionadoNaListagem(idKwamiSelecionado) {
	const kwamiSelecionadoNaListagem = document.getElementById(idKwamiSelecionado);
	kwamiSelecionadoNaListagem.classList.add("ativo");
}

function desativarKwamiNaListagem() {
	const kwamiAtivoNaListagem = document.querySelector(".ativo");kwamiAtivoNaListagem.classList.remove("ativo");
	}


function mostrarCartaoKwamiSelecionado(kwami) {
	const idKwamiSelecionado = kwami.attributes.id.value;
	const idDoCartaoKwamiParaAbrir = "cartao-" + idKwamiSelecionado;
	const cartaoKwamiParaAbrir = document.getElementById(idDoCartaoKwamiParaAbrir);
	cartaoKwamiParaAbrir.classList.add("aberto");
	return idKwamiSelecionado;
}

function esconderCartaoKwami() {
	const cartaoKwamiAberto = document.querySelector(".aberto");
		cartaoKwamiAberto.classList.remove("aberto");
}
