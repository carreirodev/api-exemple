const { application } = require("express");

function recuperarFilme() {
	const id = document.getElementById("idfilme").value;

	console.log("id Recuperado = " + id);
	const token = localStorage.getItem("APIToken");
	const header = {
		headers: { Authorization: "Bearer " + token }
	};

	fetch("http://localhost:4000/movies/" + id, header)
		.then((res) => trataResposta(res))
		.catch((erro) => alert("Impossivel recuperar"));
}

function trataResposta(res) {
	if (res.status == 200) {
		res.json().then((movies) => preencheDados(movies));
	} else if (res.status == 404) {
		alert("nao achei o filme");
	} else {
		alert("Erro desconhecido");
	}
}

function preencheDados(movies) {
	let strFilme = `<h2>${movies.title}</h2>
    <strong>Duracao</strong> ${movies.runtime}<br>
    <strong> Homepage</strong> ${movies.homepage}`;

	document.getElementById("dadosFilme").innerHTML = strFilme;
}

function login() {
	let txtemail = document.getElementById("txtEmail").value;
	let txtsenha = document.getElementById("txtSenha").value;
	const msgBody = {
		email: txtemail,
		senha: txtsenha
	};

	const req = {
		method: "POST",
		body: JSON.stringify(msgBody),
		headers: {
			"content-type": "application/json"
		}
	};
	fetch("http://localhost:4000/login", req)
		.then((res) => res.json())
		.then((token) => {
			alert("estou logado");
			localStorage.setItem("APIToken", token);
		});
}
