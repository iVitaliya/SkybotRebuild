const Config = require("./Lib/Config.json");
const SkybotClient = require("./Lib/Client");

new SkybotClient().start(Config._token);