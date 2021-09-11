const express = require('express');
// const path = require("path");
const port = 5000;
const ingredientsRouter = require('./routes/ingredients');
const recipeRouter = require('./routes/recipes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
/*
app.use(
	cors({
		//origin: 'http://127.0.0.1:5500',
		// methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		//preflightContinue: false,
		//optionsSuccessStatus: 204,
		//credentials: true,
	})
);
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
	next();
});
app.options('*', cors());
*/
app.get('/', (req, res, next) => {
	res.json({
		success: true,
		message: 'Head over to /recipes for recipes or /ingredients for the list of ingredients',
	});
});
app.use('/recipes', recipeRouter);
app.use('/ingredients', ingredientsRouter);

module.exports = app;
