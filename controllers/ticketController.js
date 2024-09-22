const {Passenger, Ticket, connection } = require('../models');

const getTicket = async (req, res) => {
  const { idpay } = req.params;
  try {
    const result = await connection.query(
      `
      SELECT 
        p.idpay, q.idquote, b.idbook, f.idflight, b.idpassenger, f.idairplane
      FROM
        pay p
      NATURAL JOIN
        quote q
      NATURAL JOIN
        book b
      NATURAL JOIN
        flights f
      WHERE 
        p.idpay = :idpay
      `, 
      {
        replacements: { idpay }, 
        type: connection.QueryTypes.SELECT,
      }
    );
    if (!result.length) {
      return res.status(404).json({ message: 'Payment or related records not found' });
    }
    const { idbook, idflight, idpassenger, idairplane } = result[0];
    const ticket = await Ticket.create({
      idbook: idbook,
      idflight: idflight,
      idairplane: idairplane,
      idpassenger: idpassenger,
      idpay: idpay,
    });
    const passengerUpdate = await Passenger.update(
      { idTicket: ticket.idticket }, 
      { where: { idpassenger: idpassenger } }
    );

    if (!passengerUpdate[0]) {
      return res.status(500).json({ message: 'Failed to update passenger with ticket' });
    }

    res.status(201).json({ message: 'Ticket successfully created and passenger updated', ticketId: ticket.idticket });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllTickets = async (req, res) => {
    try {
      const tickets = await Ticket.findAll();
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getTicketByPassenger = async (req, res) => {
    const { passengerId } = req.params;
  
    try {
      const tickets = await Ticket.findAll({ where: { idpassenger: passengerId } });
      if (tickets.length === 0) {
        return res.status(404).json({ message: 'No tickets found for this passenger' });
      }
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports ={
    getTicket,
    getAllTickets,
    getTicketByPassenger,
  }