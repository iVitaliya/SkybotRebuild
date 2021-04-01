// Files used for fetching the user
const Cluster = require("../Client");
const Log = require("../Core/Logger");

// Packages used for fetching the user.
const { GuildChannel, Guild } = require("discord.js");

/** @type {"store" | "news" | "category" | "text" | "voice"} */
const ChannelTypes; 

module.exports = class SkybotChannelFetcher {
    /** @param {Cluster} client */
    constructor(client) {
        /** @private */
        this.client = client;
    }

    /** Resolver used for fetching the channel
     * @param {String} ChannelResolvable The resolvable for fetching the channel.
     * @param {Guild} guild The guild to seek the member in.
     * @returns {GuildChannel | Promise<GuildChannel> | null}
     */
    async resolve(ChannelResolvable, guild) {
        if (typeof ChannelResolvable === 'string') continue;
        else throw Log("Error", "The ChannelResolvable must be a type of a string!");

        let Resolvable = await guild.channels.cache.find(
            (ch) => ch.name.toLowerCase() === ChannelResolvable.toLowerCase() ||
                ch.id === ChannelResolvable.replace(/[\\<>#]/g, "")
        );

        try {
            if (!Resolvable) Resolvable = guild.channels.resolve(ChannelResolvable);
        } catch (error) {
            throw Log("Error", err);
        }

        return Resolvable || null;
    }

    /** Resolver used for strictly fetching a channel with the proper type
     * @param {String} ChannelResolvable The resolvable for fetching the channel.
     * @param {ChannelTypes} ChannelTypes The type the channel should be
     * @param {Guild} guild The guild to seek the member in.
     * @returns {GuildChannel | Promise<GuildChannel> | String | null}
     */
    strictResolve(ChannelResolvable, ChannelTypes, guild) {
        if (typeof ChannelResolvable === 'string') continue;
        else throw Log("Error", "The ChannelResolvable must be a type of a string!");

        let Resolvable = await guild.channels.cache.find(
            (ch) => ch.name.toLowerCase() === ChannelResolvable.toLowerCase() ||
                ch.id === ChannelResolvable.replace(/[\\<>#]/g, "")
        );

        try {
            if (!Resolvable) Resolvable = guild.channels.resolve(ChannelResolvable);
        } catch (error) {
            throw Log("Error", err);
        }

        if (Resolvable.type !== ChannelTypes)
            return `The type you requested was supposed to be ${this.client.capitalise(ChannelTypes)}Channel but the type of ${Resolvable.name} is a ${this.client.capitalise(Resolvable.type)}Channel.`;

        return Resolvable || null;
    }
}