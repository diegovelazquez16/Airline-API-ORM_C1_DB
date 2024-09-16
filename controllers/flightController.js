const { Flight } = require('../models');

const createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.findAll();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findByPk(req.params.id);
    if (flight) {
      res.status(200).json(flight);
    } else {
      res.status(404).json({ message: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFlight = async (req, res) => {
  try {
    const [updated] = await Flight.update(req.body, {
      where: { idflight: req.params.id }
    });
    if (updated) {
      const updatedFlight = await Flight.findByPk(req.params.id);
      res.status(200).json(updatedFlight);
    } else {
      res.status(404).json({ message: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un vuelo
const deleteFlight = async (req, res) => {
  try {
    const deleted = await Flight.destroy({
      where: { idflight: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Flight not found' });
    } else {
      res.status(404).json({ message: 'Vuelo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFlight,
  getAllFlights,
  getFlightById,
  updateFlight,
  deleteFlight
};
