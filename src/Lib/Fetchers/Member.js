// Files used for fetching the user
const Cluster = require("../Client");
const Log = require("../Core/Logger");

// Packages used for fetching the user.
const { GuildMember, Guild } = require("discord.js");


module.exports = class SkybotMemberFetcher {
    /** @param {Cluster} client */
    constructor(client) {
        /** @private */
        this.client = client;
    }

    /** Resolver used for fetching the user
     * @param {String} GuildMemberResolvable The resolvable for fetching the user.
     * @param {Guild} guild The guild to seek the member in.
     * @returns {GuildMember | null}
     */
    async resolve(GuildMemberResolvable, guild) {
        if (typeof GuildMemberResolvable === 'string') continue;
        else throw Log("Error", "The UserResolvable must be a type of a string!");

        let Resolvable = await guild.members.cache.find(
            (usr) => usr.displayName === GuildMemberResolvable.toLowerCase() ||
                usr.user.tag.toLowerCase() === GuildMemberResolvable.toLowerCase() ||
                usr.user.username.toLowerCase() === GuildMemberResolvable.toLowerCase() ||
                usr.id === GuildMemberResolvable.replace(/[\\<>@!]/g, '')
        );

        try {
            if (!Resolvable) Resolvable = guild.members.resolve(GuildMemberResolvable);
        } catch (error) {
            throw Log("Error", err);
        }

        return Resolvable || null;
    }
}