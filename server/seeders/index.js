const pizzaSeeder = require('./pizzaSeeder');

const runSeeders = async () => {
    await pizzaSeeder.seedPizzas();
}

module.exports = { runSeeders }