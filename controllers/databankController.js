const { DataBank } = require('../models');

const createDataBank = async (req, res) => {
  try {
    const databank = await DataBank.create(req.body);
    res.status(201).json(databank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllDataBanks = async (req, res) => {
  try {
    const databanks = await DataBank.findAll();
    res.status(200).json(databanks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDataBankById = async (req, res) => {
  try {
    const databank = await DataBank.findByPk(req.params.id);
    if (databank) {
      res.status(200).json(databank);
    } else {
      res.status(404).json({ message: 'DataBank no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDataBank = async (req, res) => {
  try {
    const [updated] = await DataBank.update(req.body, {
      where: { iddatabank: req.params.id }
    });
    if (updated) {
      const updatedDataBank = await DataBank.findByPk(req.params.id);
      res.status(200).json(updatedDataBank);
    } else {
      res.status(404).json({ message: 'DataBank no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteDataBank = async (req, res) => {
  try {
    const deleted = await DataBank.destroy({
      where: { iddatabank: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'DataBank eliminado' });
    } else {
      res.status(404).json({ message: 'DataBank no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createDataBank,
  getAllDataBanks,
  getDataBankById,
  updateDataBank,
  deleteDataBank
};
