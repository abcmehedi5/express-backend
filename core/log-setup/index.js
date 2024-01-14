const winston = require("winston");
require("winston-daily-rotate-file");

const infoTransport = new winston.transports.DailyRotateFile({
  filename: "logs/info/info-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "20d",
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf((info) => `${[info.timestamp]}: ${info.message}`)
  ),
});

const errorTransport = new winston.transports.DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "1d",
  filename: "logs/error/error-%DATE%.log",
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf(
      (info) => `error: ${[info.timestamp]}: ${info.message}`
    )
  ),
});

const debugTransport = new winston.transports.DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "1d",
  filename: "logs/debug/debug-%DATE%.log",
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf(
      (info) => `debug: ${[info.timestamp]}: ${info.message}`
    )
  ),
});

const infoLogger = winston.createLogger({
  level: "info",
  transports: [
    infoTransport,
  ],
});

const errorLogger = winston.createLogger({
  level: "error",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        winston.format.align(),
        winston.format.printf(
          (info) => `error: ${[info.timestamp]}: ${info.message}`
        ),
        winston.format.colorize({ all: true })
      ),
    }),
    errorTransport,
  ],
});

const debugLogger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        winston.format.align(),
        winston.format.printf(
          (info) => `debug: ${[info.timestamp]}: ${info.message}`
        ),
        winston.format.colorize({ all: true })
      ),
    }),
    debugTransport,
  ],
});

const debug = (message) => {
  debugLogger.debug(message);
};
const info = (message) => {
  infoLogger.info(message);
};
const error = (message) => {
  errorLogger.error(message);
};

module.exports = { debug, info, error };
