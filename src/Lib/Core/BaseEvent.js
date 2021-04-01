const Cluster = require("../Client");
const { IEvent } = require("./BaseInterfaces");

module.exports = class BaseEvent {
    /** @param {Cluster} client @param {IEvent} data */
    constructor(client, data = {}) {
        this.client = client;

        this.name = data.name;
        this.executesOn = data.executesOn;
        this.once = data.once;
    }

    async exec() {
        throw this.client.log("Alert", `${this.client.capitalise(this.name)} doesn't do anything!`);
    }
}