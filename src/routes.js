const express = require('express');
const expressRouter = express.Router();
const multer = require('multer');

const MulterConfig = require('./config/MulterConfig');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController= require('./controllers/DashboardController');
const BookingController= require('./controllers/BookingController');

const upload = multer(MulterConfig);

expressRouter.post('/sessions', SessionController.store);

expressRouter.get('/spots', SpotController.index);
expressRouter.post('/spots', upload.single('thumbnail'), SpotController.store);

expressRouter.get('/dashboard', DashboardController.show);

expressRouter.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = expressRouter;