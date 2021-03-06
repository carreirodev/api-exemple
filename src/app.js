const express = require("express");
const routes = require("./routes");
const db = require("./database");
const cors = require("cors");

const trataErroValidacao = require("./middleware/trataErroValidacao");

const api = express();

db.hasConnection();

api.use(cors());
api.use(express.json());
api.use(routes);
api.use(trataErroValidacao);

// definicao de endereço e url

const hostname = "localhost";
const port = 4000;
api.listen(port, () => {
	console.log(`API running at http://${hostname}:${port}/`);
});
