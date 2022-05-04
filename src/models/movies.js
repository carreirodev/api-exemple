const { DataTypes } = require("sequelize");
const db = require("../database");

const Filmes = db.define(
	"Filmes",
	{
		movie_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			length: 1000
		},
		budget: {
			type: DataTypes.INTEGER
		},
		homepage: {
			type: DataTypes.STRING(1000)
		},
		overview: {
			type: DataTypes.STRING,
			length: 1000
		},
		popularity: {
			type: DataTypes.DOUBLE
		},
		release_date: {
			type: DataTypes.DATEONLY
		},
		revenue: {
			type: DataTypes.INTEGER
		},
		runtime: {
			type: DataTypes.INTEGER
		},
		movie_status: {
			type: DataTypes.STRING,
			length: 50
		},
		tagline: {
			type: DataTypes.STRING,
			length: 1000
		},
		vote_average: {
			type: DataTypes.DOUBLE
		},
		vote_count: {
			type: DataTypes.INTEGER
		}
	},
	{
		tableName: "movie",
		timestamps: false
	}
);

module.exports = Filmes;
