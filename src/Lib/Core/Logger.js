const moment = require("moment");
const {
    white, gray, blue, 
    whiteBright, redBright
} = require("chalk");

/** This file will be used to log any data to the console.
 * @param {"Info" | "Debug" | "Warn" | "Alert" | "Error"} type
 * @param {String} message
 * @returns 
 */
module.exports = (type, message) => {
    const log = type !== "Alert"
        ? `${white("[")
        }${gray(moment().format("YYYY-DD-MM hh:mm:ss A"))}${white("] ")
        }${blue(`[${type}]`)} ${whiteBright(message)}`
        : redBright(
            `[${moment().format("YYYY-DD-MM hh:mm:ss A")}] [${type}] ${message}`
        );
    
        return console.log(log);
}