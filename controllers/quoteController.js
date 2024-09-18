const { Quote, Book, Flight } = require('../models'); 

const getQuote = async (req, res) => {
  try {
    const bookId  = req.params.idb;
    const flightId = req.params.idf;
    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    const numPassengers = book.numPassengers;
    const quote = await Quote.create({ idbook: bookId });
    const flight = await Flight.findByPk(flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    const total = flight.price * numPassengers;
    await quote.update({ idflight: flightId, total });
    res.json({ total, message: 'Total successfully saved in the quote' });
  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ error: error.message });
  }
};

const getAllQuotes = async (req, res) => {
    try {
      const quotes = await Quote.findAll();
      res.json(quotes);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      res.status(500).json({ error: error.message });
    }
  };

  const deleteQuote = async (req, res) => {
    try {
      const result = await Quote.destroy({ where: { idquote: req.params.id} });
      if (result === 0) {
        return res.status(404).json({ message: 'Quote not found' });
      }
      res.json({ message: 'Quote deleted successfully' });
    } catch (error) {
      console.error('Error deleting quote:', error);
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    getQuote,
    getAllQuotes,
    deleteQuote
  };
  