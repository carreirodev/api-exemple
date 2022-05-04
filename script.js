function recuperarFilme() {
	const id = document.getElementById("idfilme").value;
	console.log("id Recuperado = " + id);
	fetch("http://localhost:4000/movies/" + id)
		.then((res) => trataResposta(res))
		.catch((erro) => alert("Impossivel recuperar"));
}

function trataResposta(res) {
	if (res.status == 200) {
		res.json().then((movies) => preencheDados(movies));
	} else {
		alert("Filme nao encontrado");
	}
}

function preencheDados(movies) {
	let strFilme = `<h2>Filme ${movies.title}</h2>
    <strong>Duracao ${movies.runtime}</strong><br>
    <strong> Homepage ${movies.homepage}</strong>`;

	document.getElementById("dadosFilme").innerHTML = strFilme;
}
