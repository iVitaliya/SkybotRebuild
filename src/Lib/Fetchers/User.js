// Files used for fetching the user
const Cluster = require("../Client");
const Log = require("../Core/Logger");

// Packages used for fetching the user.
const { User } = require("discord.js");


module.exports = class SkybotUserFetcher {
    /** @param {Cluster} client */
    constructor(client) {
        /** @private */
        this.client = client;
    }

    /** Resolver used for fetching the user
     * @param {String} UserResolvable The resolvable for fetching the user.
     * @returns {User | Promise<User> | null}
     */
    async resolve(UserResolvable) {
        if (typeof UserResolvable === 'string') continue;
        else throw Log("Error", "The UserResolvable must be a type of a string!");

        let Resolvable = await this.client.users.cache.find(
            (usr) => usr.tag.toLowerCase() === UserResolvable.toLowerCase() ||
                usr.username.toLowerCase() === UserResolvable.toLowerCase() ||
                usr.id === UserResolvable.replace(/[\\<>@!]/g, '')
        );

        try {
            if (!Resolvable) Resolvable = this.client.users.resolve(UserResolvable);
        } catch (error) {
            throw Log("Error", err);
        }

        return Resolvable || null;
    }
}