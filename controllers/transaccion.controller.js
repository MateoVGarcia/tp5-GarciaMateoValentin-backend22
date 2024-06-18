const Transaccion = require('./../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    const transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion saved'
        });
    }
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error guardando transaccion.',
            'error': error.message
        })
    };
}

transaccionCtrl.getHistorialTransaccion = async (req, res) => {
    const email = req.params.emailCliente;
    try {
        const transacciones = await Transaccion.find({ emailCliente: email });
        res.json(transacciones);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al recuperar transacciones:', error
        });
    }
};

transaccionCtrl.getTransaccionesPorMonedas = async (req, res) => {
    const { monedaOrigen, monedaDestino } = req.params;
    try {
        const transacciones = await Transaccion.find({ monedaOrigen: monedaOrigen, monedaDestino: monedaDestino });
        res.json(transacciones);
    } catch (error) {
        res.status(400).json({ message: 'Error al recuperar transacciones', error });
    }
};

module.exports = transaccionCtrl;