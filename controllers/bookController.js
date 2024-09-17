const { Book } = require('../models');

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateBook = async (req, res) => {
  try {
    const [updated] = await Book.update(req.body, {
      where: { idbook: req.params.id }
    });
    if (updated) {
      const updatedBook = await Book.findByPk(req.params.id);
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.destroy({
      where: { idbook: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Book eliminado' });
    } else {
      res.status(404).json({ message: 'Book no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
