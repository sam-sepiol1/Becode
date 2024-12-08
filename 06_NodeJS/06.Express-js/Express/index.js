import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const data = JSON.parse(fs.readFileSync("./recipes.json", "utf-8"));

const app = express();
const checkApiKey = (req, res, next) => {
	const { userKey } = req.body;
	
	if (!userKey) {
		return res.status(400).json({ error: "API key is missing" });
	}
	if (userKey !== API_KEY) {
		return res.status(403).json({ error: "You don't have the permissions for that, big man" });
	}
	
	
	next();
};

const PORT = 3000;
const API_KEY = process.env.API_KEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkApiKey);

app.get("/", (req, res) => {
	res.json(data);
});

app.get("/random", (req, res) => {
	const randomRecipe = Math.floor(Math.random() * data.length);

	if (randomRecipe < 0 || randomRecipe > data.length) {
		return res.status(404).send("Recipe not found");
	}

	res.json(data[randomRecipe]);
});

app.get("/recipes/id/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const recipe = data.find((recipe) => recipe.id === id);

	if (!recipe) {
		res.status(404).send("Recipe not found");
	}

	res.json(recipe);
});

app.get("/recipes/:name", (req, res) => {
	const name = req.params.name.toLowerCase();
	const recipe = data.find((recipe) => recipe.name.toLowerCase().replaceAll(" ", "") === name);

	if (!recipe) {
		res.status(404).send("Recipe not found");
	}
    
	res.json(recipe);
});

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`));