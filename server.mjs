import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroePorAtributoController, obtenerSuperheroesMayoresDe30Controller } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroePorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});