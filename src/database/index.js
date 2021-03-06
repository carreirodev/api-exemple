const Sequelize = require("sequelize");

// objeto para guardar a conexão do banco dados
const DB_NAME = "movies";
const DB_USER = "root";
const DB_PASS = "sdGyJJhChiqbydu8VCut";
const DB_CONFIG = {
	dialect: "mysql",
	host: "localhost",
	port: 3306
};

let db = {}; // objeto que mantem a conexao com banco

// executando
try {
	db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
	console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConnection() {
	try {
		await db.authenticate();
		console.log("Banco dados conectado!");
	} catch (error) {
		console.error("Erro ao tentar se conectar ao banco de dados1");
	}
}

// adiciona uma funcao a um objeto dinamicamente
Object.assign(db, { hasConnection });

module.exports = db;
