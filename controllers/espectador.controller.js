const Espectador = require('./../models/espectador');
const espectadorCtrl = {};

espectadorCtrl.getEspectadores = async (req, res) => {
    const espectadores = await Espectador.find();
    res.json(espectadores);
}

espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'Espectador saved successfully'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error guardando espectador.',
            'error': error.message
        })
    }
}

espectadorCtrl.getEspectador = async (req, res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
}

module.exports = espectadorCtrl;