# Express.js Project

## Overview
This project is a simple web application built using Express.js.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3. Install dependencies:
    ```sh
    npm i
    ```

## Usage
1. Start the server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`. It will send all the recipes.

## The routes. 

1. `http://localhost:3000/random` will send you a random recipe. 
2. `http://localhost:3000/recipes/id/your_number` will send you the recipe with the corresponding ID. 
   Example : `http://localhost:3000/recipes/id/1` will send back the recipe with ID of 1.

3. `http://localhost:3000/recipes/:name` will send you the recipe with the corresponding name. 
Example : `http://localhost:3000/recipes/spaghetticarbonara` will send back the recipe of spaghetti carbonara.


