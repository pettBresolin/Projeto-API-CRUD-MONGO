const route = require('express').Router();
const controllerTenisRun = require('../CONTROLLERS/tenisrun.controller');

route.get('/todos-os-tenis', controllerTenisRun.findAlltenisRunController);
route.get('/:id', controllerTenisRun.findByIdtenisRunController);
route.post('/create', controllerTenisRun.createtenisRunController);
route.put('/update/:id', controllerTenisRun.updatetenisRunController);
route.delete('/delete/:id', controllerTenisRun.deletetenisRunController);

module.exports = route;
