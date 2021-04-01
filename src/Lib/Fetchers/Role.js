// Files used for fetching the user
const Cluster = require("../Client");
const Log = require("../Core/Logger");

// Packages used for fetching the user.
const { Role, Guild } = require("discord.js");


module.exports = class SkybotRoleFetcher {
    /** @param {Cluster} client */
    constructor(client) {
        /** @private */
        this.client = client;
    }

    /** Resolver used for fetching the role
     * @param {String} RoleResolvable The resolvable for fetching the role.
     * @param {Guild} guild The guild to seek the member in.
     * @returns {Role | Promise<Role> | null}
     */
    async resolve(RoleResolvable, guild) {
        if (typeof RoleResolvable === 'string') continue;
        else throw Log("Error", "The RoleResolvable must be a type of a string!");

        let Resolvable = await guild.roles.cache.find(
            (rl) => rl.name.toLowerCase() === RoleResolvable.toLowerCase() ||
                rl.id === RoleResolvable.replace(/[\\<>@&]/g, "")
        );

        try {
            if (!Resolvable) Resolvable = guild.roles.resolve(RoleResolvable);
        } catch (error) {
            throw Log("Error", err);
        }

        return Resolvable || null;
    }
}