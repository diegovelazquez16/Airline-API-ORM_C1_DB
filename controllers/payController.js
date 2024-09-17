const {Pay, Quote, DataBank} = require('../models')

const addPay = async (req, res) => {
    try {
      const { idquote, iddatabank } = req.body; 
      const quote = await Quote.findByPk(idquote);
      if (!quote) {
        return res.status(404).json({ message: 'Quote not found' });
      }
      const totalPay = quote.total; 
      const dataBank = await DataBank.findByPk(iddatabank);
      if (!dataBank) {
        return res.status(404).json({ message: 'DataBank not found' });
      }
      const pay = await Pay.create({
        ...req.body, 
        totalPay, 
      });
  
      res.status(201).json({ message: 'Payment successful', pay });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getAllPay = async (req, res) => {
    try {
      const payments = await Pay.findAll(); 
      res.json(payments); 
    } catch (error) {
      console.error('Error fetching payments:', error);
      res.status(500).json({ error: error.message });
    }
  };

const getPayById = async (req, res) => {
    try {
      const payment = await Pay.findByPk(req.params.id); 
      if (!payment) {
        return res.status(404).json({ message: 'Payment not found' });
      }
      res.json(payment); 
    } catch (error) {
      console.error('Error fetching payment:', error);
      res.status(500).json({ error: error.message });
    }
  };

  module.exports={
    addPay,
    getAllPay,
    getPayById,

  }