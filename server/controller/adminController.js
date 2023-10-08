const Admin = require("../database/models/adminModel.js");

module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await Admin.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addAdmin: async (req, res) => {
    try {
      const response = await Admin.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },
  deleteAdmin: async (req, res) => {
    try {
      const response = await Admin.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateAdmin: async (req, res) => {
    try {
      const response = await Admin.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
};
