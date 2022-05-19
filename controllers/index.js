// FUNCATIONALITY > ROUTER
const router = require('express').Router();

// FUNCATIONALITY > LIST OF API ROUTES
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

// FUNCTIONALITY > USE ROUTES
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;