const requestValidator = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      // If validation fails, send a 400 Bad Request response with the validation error details
      return res.status(400).json({
        error: {
          message: validationResult.error.details[0].message,
        },
      });
    }

    // If validation passes, proceed to the next middleware
    next();
  };
};

module.exports = requestValidator;
