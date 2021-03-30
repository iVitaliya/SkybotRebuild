// Files for the Discord bot client to use.
const pkg = require("../../package.json");

// Packages for the Discord bot client to use.
const { Client, Collection, Intents } = require("discord.js");

module.exports = class SkybotClient extends Client {
    constructor() {
        super({
            messageCacheMaxSize: 900,
            messageCacheLifetime: 10800,
            messageSweepInterval: 12000,
            partials: [
                'MESSAGE', 'REACTION', 'USER',
                'GUILD_MEMBER', 'CHANNEL'],
            ws: {
                intents: Intents.FLAGS.GUILDS | Intents.FLAGS.GUILD_MEMBERS | Intents.FLAGS.GUILD_BANS |
                Intents.FLAGS.GUILD_INVITES | Intents.FLAGS.GUILD_PRESENCES | Intents.FLAGS.GUILD_MESSAGES |
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS | Intents.FLAGS.DIRECT_MESSAGES |
                Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
            }
        });
    }

    start() {
        
    }
}