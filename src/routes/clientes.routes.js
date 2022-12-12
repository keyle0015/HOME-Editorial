import {Router} from 'express';
import {getClientes, getCliente, createClientes} from '../controllers/clientes.controllers.js'
import {updateClientes, deleteClientes} from '../controllers/clientes.controllers.js'

const router = Router()

router.get('/clientes', getClientes);

router.get('/clientes/:id', getCliente);

router.post('/clientes', createClientes);

router.patch('/clientes', updateClientes);

router.delete('/clientes', deleteClientes);

export default router