const Ticket = require('./../models/ticket');
const Espectador = require('./../models/espectador');
const ticketCtrl = {};

ticketCtrl.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('espectador');
        res.json(tickets);
    } catch (error) {
        res.status(400).json({ message: 'Error al recuperar tickets', error });
    }
};

ticketCtrl.createTicket = async (req, res) => {
    try {
        const { precioTicket, categoriaEspectador, fechaCompra, espectador } = req.body;

        let existingEspectador = await Espectador.findOne({ email: espectador.email });
        if (!existingEspectador) {
            existingEspectador = new Espectador(espectador);
            await existingEspectador.save();
        }

        const newTicket = new Ticket({
            precioTicket,
            categoriaEspectador,
            fechaCompra,
            espectador: existingEspectador._id
        });

        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el ticket', error });
    }
};

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}


ticketCtrl.editTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const { precioTicket, categoriaEspectador, fechaCompra, espectador } = req.body;
        if (!id) {
            return res.status(400).json({
                status: '0',
                msg: 'ID de ticket no proporcionado'
            });
        }

        let existingEspectador = await Espectador.findOne({ email: espectador.email });

        if (!existingEspectador) {
            existingEspectador = new Espectador(espectador);
            await existingEspectador.save();
        }
        const updatedTicket = await Ticket.findByIdAndUpdate(id, {
            precioTicket,
            categoriaEspectador,
            fechaCompra,
            espectador: existingEspectador._id
        }, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({
                status: '0',
                msg: 'Ticket no encontrado'
            });
        }
        res.json({
            status: '1',
            msg: 'Ticket actualizado',
            ticket: updatedTicket
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status: '0',
            msg: 'Error al procesar la operación de actualización'
        });
    }
};

ticketCtrl.getEspectadorPorCategoria = async (req, res) => {
    try {
        const { categoriaEspectador } = req.params;
        const tickets = await Ticket.find({ categoriaEspectador });
        const espectadorIds = tickets.map(ticket => ticket.espectador);
        const espectadores = await Espectador.find({ _id: { $in: espectadorIds } })
        res.json(espectadores);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status: '0',
            msg: 'Error obteniendo espectadores por categoría.',
            error: error.message
        });
    }
};

module.exports = ticketCtrl;
