const Pizza = require("../models/pizzaModel");

module.exports = {
  getPizzas: async (req, res) => {
    try {
      const { price, search } = req.body;
      const filters = {};

      if (price && price.length === 2) {
        filters.price = { $gte: price[0], $lte: price[1] };
      }

      if (search && search.trim() !== "") {
        filters.name = { $regex: search, $options: "i" };
      }

      const pizzas = await Pizza.find(filters);
      return res.json(pizzas);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
};
