const authRoutes = require("./routes/authRoutes");
const pizzaRoutes = require("./routes/pizzaRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const routes = [
    {
        path: '/',
        router: authRoutes
    },
    {
        path: '/pizza',
        router: pizzaRoutes
    },
    {
        path: '/cart',
        router: cartRoutes
    },
    {
        path: '/orders',
        router: orderRoutes
    }
]

const loadRoutes = (app) => {
    routes.forEach(route => {
        app.use(route.path, route.router);
    });
};

module.exports = { loadRoutes, routes };