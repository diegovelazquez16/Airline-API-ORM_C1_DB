const { Airplane } = require('../models');

// Crear un avión
const createAirplane = async (req, res) => {
  try {
    const airplane = await Airplane.create(req.body);
    res.status(201).json(airplane);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los aviones
const getAllAirplanes = async (req, res) => {
  try {
    const airplanes = await Airplane.findAll();
    res.status(200).json(airplanes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un avión por ID
const getAirplaneById = async (req, res) => {
  try {
    const airplane = await Airplane.findByPk(req.params.id);
    if (airplane) {
      res.status(200).json(airplane);
    } else {
      res.status(404).json({ message: 'Avión no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un avión
const updateAirplane = async (req, res) => {
  try {
    const [updated] = await Airplane.update(req.body, {
      where: { idarplane: req.params.id }
    });
    if (updated) {
      const updatedAirplane = await Airplane.findByPk(req.params.id);
      res.status(200).json(updatedAirplane);
    } else {
      res.status(404).json({ message: 'Avión no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un avión
const deleteAirplane = async (req, res) => {
  try {
    const deleted = await Airplane.destroy({
      where: { idarplane: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Avión eliminado' });
    } else {
      res.status(404).json({ message: 'Avión no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplaneById,
  updateAirplane,
  deleteAirplane
};
