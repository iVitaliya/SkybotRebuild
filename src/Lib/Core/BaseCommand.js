const { Message } = require("discord.js");
const Cluster = require("../Client");
const { ICommand } = require("./BaseInterfaces");

module.exports = class BaseCommand {
    /** @param {Cluster} client @param {ICommand} data */
    constructor(client, data = {}) {
        this.client = client;

        this.name = data.name;
        this.aliases = data.aliases;
        this.usages = data.usages;
        this.examples = data.examples;
        this.args = data.args;
        this.description = data.description;

        this.settings = data.settings = {
            /** @type {Boolean} */
            nsfw: false,
            /** @type {Boolean} */
            requiresArgs: false,
        };

        this.adminOnly = data.adminOnly;
        this.ownerOnly = data.ownerOnly;
        this.devOnly = data.devOnly;

        this.cooldown = data.cooldown = {
            /** @type {Number} */
            uses: 3,
            /** @type {Number} */
            duration: 3
        };
    }

    /**
     * @public
     * @param {Message} message 
     * @param {Array<String>} args 
     */
    async exec(message, args) {
        throw this.client.log("Alert", `${this.client.capitalise(this.name)} doesn't do anything!`);
    }
}