const { resolve, join, parse } = require("path");
const {Collection} = require("discord.js");
const klaw = require("klaw");

const Cluster = require("../Client");
const Command = require("../Core/BaseCommand");

/** @type {Collection<String, Command>} */
const col;

module.exports = class SkybotCommandHandler extends col {
    /** @param {Cluster} client */
    constructor(client) {
        super();

        this.client = client;
    }

    async init() {
        const path = resolve(join(__dirname, "..", "..", "Commands"));
        const start = Date.now();

        klaw(path)
            .on('data', (item) => {
                const file = parse(item.path);
                if (!file.ext || file.ext !== '.js') return;

                const req = ((r) => r.default || r)(require(resolve(join(file.dir, file.base))));
                const newReq = new req(this.client, file.name, resolve(join(file.dir, file.base)));

                this.set(file.name, newReq);
            })
            .on('end', () => {
                this.client.log('Info', `Loaded ${this.size} Commands in ${Date.now() - start}ms`);

                return this;
            })
            .on('error', (err) => {
                this.client.log('Error', `[${err.name}] ${err.message}`);
            });
    }

    fetch(name) {
        if (this.has(name)) return this.get(name);
        if (this.client.aliases.has(name)) return this.get(this.client.aliases.get(name));
    }
}