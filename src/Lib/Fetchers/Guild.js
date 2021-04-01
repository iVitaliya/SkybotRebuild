// Files used for fetching the user
const Cluster = require("../Client");
const Log = require("../Core/Logger");

// Packages used for fetching the user.
const { Guild } = require("discord.js");


module.exports = class SkybotGuildFetcher {
    /** @param {Cluster} client */
    constructor(client) {
        /** @private */
        this.client = client;
    }

    /** Resolver used for fetching the guild
     * @param {String} GuildResolvable The resolvable for fetching the guild.
     * @returns {Guild | Promise<Guild> | null}
     */
    async resolve(GuildResolvable) {
        if (typeof GuildResolvable === 'string') continue;
        else throw Log("Error", "The GuildResolvable must be a type of a string!");

        let Resolvable = await this.client.guilds.cache.find(
            (g) => g.name.toLowerCase() === GuildResolvable.toLowerCase() ||
                g.id === GuildResolvable
        );

        try {
            if (!Resolvable) Resolvable = this.client.guilds.resolve(GuildResolvable);
        } catch (error) {
            throw Log("Error", err);
        }

        return Resolvable || null;
    }
}