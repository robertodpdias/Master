const express = require('express');
const route = express.Router();

//IMPORTS
const agendaController = require('../controller/agendaController');
const ambienteController = require('../controller/ambienteController');
const componenteController = require('../controller/componenteController');
const tipoAmbienteController = require('../controller/tipoAmbienteController');
const turmaController = require('../controller/turmaController');
const usuarioController = require('../controller/usuarioController');
const turmaComponenteController = require('../controller/turmaComponenteController');

//ENDPOINTS AGENDA
route.get('/agenda', agendaController.read);
route.get('/agenda/:id', agendaController.read);
route.post('/agenda', agendaController.create);
route.put('/agenda/:id', agendaController.update);
route.delete('/agenda/:id', agendaController.remove);

//ENDPOINTS AMBIENTE
route.get('/ambiente', ambienteController.read);
route.get('/ambiente/:id', ambienteController.read);
route.post('/ambiente', ambienteController.create);
route.put('/ambiente/:id', ambienteController.update);
route.delete('/ambiente/:id', ambienteController.remove);

//ENDPOINTS COMPONETE
route.get('/componente', componenteController.read);
route.get('/componente/:id', componenteController.read);
route.post('/componente', componenteController.create);
route.put('/componente/:id', componenteController.update);
route.delete('/componente/:id', componenteController.remove);

//ENDPOINTS TIPO DE AMBIENTE
route.get('/tipoambiente', tipoAmbienteController.read);
route.get('/tipoambiente/:id', tipoAmbienteController.read);
route.post('/tipoambiente', tipoAmbienteController.create);
route.put('/tipoambiente/:id', tipoAmbienteController.update);
route.delete('/tipoambiente/:id', tipoAmbienteController.remove);

//ENDPOINTS TURMAS
route.get('/turma', turmaController.read);
route.get('/turma/:id', turmaController.read);
route.post('/turma', turmaController.create);
route.put('/turma/:id', turmaController.update);
route.delete('/turma/:id', turmaController.remove);

//ENDPOINTS TURMA COMPONETE
route.get('/turmacomponente', turmaComponenteController.read);
route.get('/turmacomponente/:id', turmaComponenteController.read);
route.post('/turmacomponente', turmaComponenteController.create);
route.put('/turmacomponente/:id', turmaComponenteController.update);
route.delete('/turmacomponente/:id', turmaComponenteController.remove);

//ENDPOINTS USUARIOS
route.get('/usuario', usuarioController.read);
route.get('/usuario/:id', usuarioController.read);
route.post('/usuario', usuarioController.create);
route.put('/usuario/:id', usuarioController.update);
route.delete('/usuario/:id', usuarioController.remove);
route.post('/loginmobile', usuarioController.loginmobile);
route.post('/login', usuarioController.login);

module.exports = route;