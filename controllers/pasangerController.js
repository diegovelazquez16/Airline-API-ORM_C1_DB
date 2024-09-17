const { Passenger } = require('../models');

const createPassenger = async (req, res) => {
  try {
    const passenger = await Passenger.create(req.body);
    res.status(201).json(passenger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.findAll();
    res.status(200).json(passengers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPassengerById = async (req, res) => {
  try {
    const passenger = await Passenger.findByPk(req.params.id);
    if (passenger) {
      res.status(200).json(passenger);
    } else {
      res.status(404).json({ message: 'Passenger no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePassenger = async (req, res) => {
  try {
    const [updated] = await Passenger.update(req.body, {
      where: { idpassenger: req.params.id }
    });
    if (updated) {
      const updatedPassenger = await Passenger.findByPk(req.params.id);
      res.status(200).json(updatedPassenger);
    } else {
      res.status(404).json({ message: 'Passenger no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePassenger = async (req, res) => {
  try {
    const deleted = await Passenger.destroy({
      where: { idpassenger: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Passenger eliminado' });
    } else {
      res.status(404).json({ message: 'Passenger no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPassenger,
  getAllPassengers,
  getPassengerById,
  updatePassenger,
  deletePassenger
};
