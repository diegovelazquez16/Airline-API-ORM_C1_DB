const { Pay, Quote, Book, Flight, Passenger, Ticket } = require('../models'); 

const getTicket = async (req, res) => {
  const { idpay } = req.params; 
  try {
    const pay = await Pay.findByPk(idpay);
    if (!pay) return res.status(404).json({ message: 'Payment not found' });
    const idquote = pay.idquote;
    const quote = await Quote.findByPk(idquote);
    if (!quote) return res.status(404).json({ message: 'Quote not found' });
    const idbook = quote.idbook;
    const book = await Book.findByPk(idbook);
    if (!book) return res.status(404).json({ message: 'Booking not found' });
    const idflight = book.idflight;
    const flight = await Flight.findByPk(idflight);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    const idairplane = flight.idairplane;
    const passenger = await Passenger.findOne({ where: { idbook: idbook } });
    if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
    const ticket = await Ticket.create({
      idbook: idbook,
      idflight: idflight,
      idairplane: idairplane,
      idpassenger: passenger.idpassenger,
      idpay: idpay,  
    });
    res.status(201).json({ message: 'Ticket successfully created', ticketId: ticket.idticket });
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