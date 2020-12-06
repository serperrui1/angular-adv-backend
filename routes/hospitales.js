/*
Ruta : /api/hospitales
*/

const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getHospitales, crearHospital, actualizarHospital, borrarHospital } = require('../controllers/hospitales')

const router = Router()

router.get('/', getHospitales);

router.post('/', [
        validarJWT,
        check('nombre', 'nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    crearHospital);
router.put('/:id', [
        validarJWT,
        check('nombre', 'nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    actualizarHospital);

router.delete('/:id', validarJWT,
    borrarHospital);


module.exports = router;