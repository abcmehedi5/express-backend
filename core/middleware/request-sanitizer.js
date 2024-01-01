const log = require('../log-setup');

const requestSanitizer = (req, res, next) => {
    try {
      const jsonObject = JSON.stringify(req.body);
      const sanitizedJson = JSON.stringify(jsonObject).replace(/'/g, "''");
      req.body = JSON.parse(sanitizedJson);
      next();
    } catch (error) {
      log.error("invalid json ["+error.message+"]");
      res.status(400).json({ status_code: 400, message: "Invalid JSON" });
    }
};

module.exports = requestSanitizer;