const Cluster = require("../Client");

const QDB = require("qdatabase");

module.exports = class SkybotDatabase {
    /** @param {Cluster} client */
    constructor(client) {
        /** @private */
        this.client = client;
    }

    init() {
        
    }
}