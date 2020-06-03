import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json("HELLO WORLD")
});


export default routes;
