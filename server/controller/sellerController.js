const Seller = require("../database/models/sellerModel.js");
module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await Seller.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addSeller: async (req, res) => {
    try {
      const response = await Seller.create();
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },
  deleteSeller: async (req, res) => {
    try {
      const response = await Seller.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateSeller: async (req, res) => {
    try {
      const response = await Seller.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(202).send(response);
    } catch (error) {
      throw error;
    }
  },
};
