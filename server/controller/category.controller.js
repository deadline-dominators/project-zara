const  Category = require ("../database/models/categoryModel.js")

module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await Category.findAll();
      res.json(response)
    } catch (error) {
      throw error;
    }
  },
  addCategory: async (req, res) => {
    try {
      const response = await Category.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const response = await Category.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateCategory: async (req, res) => {
    try {
      const response = await Category.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
};
