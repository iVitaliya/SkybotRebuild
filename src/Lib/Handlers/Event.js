const { resolve, join, parse } = require("path");
const {Collection} = require("discord.js");
const klaw = require("klaw");

const Cluster = require("../Client");
const Event = require("../Core/BaseEvent");

module.exports = class SkybotEventHandler extends Collection {
    /** @param {Cluster} client */
    constructor(client) {
        super();

        this.client = client;
    }

    async init() {
        const path = resolve(join(__dirname, "..", "..", "Events"));
        const start = Date.now();

        klaw(path)
            .on('data', (item) => {
                const file = parse(item.path);

                if (file.ext && file.ext === '.js') {
                    const Event = ((r) => r.default || r)(require(resolve(join(file.dir, file.base))));
                    /** @type {Event} */
                    const event = new Event(this.client, resolve(join(file.dir, file.base)));

                    this.set(file.name, event);

                    this.client[event.once ? 'once' : 'on'](event.name, (...args) => event.exec(...args));
                }
            })
            .on('end', () => {
                this.client.log('Info', `Loaded ${this.size} Events in ${Date.now() - start}ms`);

                return this;
            })
            .on('error', (err) => {
                this.client.log('Error', `[${err.name}] ${err.message}`);
            });
    }

    fetch(name) {
        if (this.has(name)) return this.get(name);
        else return null;
    }
}