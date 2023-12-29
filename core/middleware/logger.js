// middleware/logger.js

const mongoose = require('mongoose');
const log = require('../log-setup');

const LogSchema = new mongoose.Schema({
  path: String,
  method: String,
  requestTime: Date,
  responseTime: Date,
});

const LogModel = mongoose.model('Log', LogSchema);

const loggerMiddleware = async (req, res, next) => {
  const startTime = Date.now();

  // Wait for the response to be sent before logging the response time
  res.on('finish', async () => {
    const endTime = Date.now();
    const logEntry = new LogModel({
      path: req.path,
      method: req.method,
      requestTime: startTime,
      responseTime: endTime,
    });

    try {
      await logEntry.save();
      log.info('Request and response times logged successfully.');
    } catch (error) {
      log.error('Error logging request and response times:', error);
    }
  });

  // Continue with the request handling
  next();
};

module.exports = loggerMiddleware;
