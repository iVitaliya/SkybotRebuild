// Files for the Discord bot client to use.
const pkg = require("../../package.json");
const SkybotUserFetcher = require("./Fetchers/User"),
      SkybotMemberFetcher = require("./Fetchers/Member"),
      SkybotRoleFetcher = require("./Fetchers/Role"),
      SkybotChannelFetcher = require("./Fetchers/Channel"),
      SkybotGuildFetcher = require("./Fetchers/Guild");
const SkybotEventHandler = require("./Handlers/Event");
const SkybotCommandHandler = require("./Handlers/Command");
const Logger = require("./Core/Logger");
const Event = require("./Core/BaseEvent");

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

        /** @param {"Info" | "Debug" | "Warn" | "Alert" | "Error"} LogType Type of log to use for the logger. @param {String} message The message to send. */
        this.log = (LogType, message) => Logger(LogType, message);
        /** @param {String} string The word to capitalise. */
        this.capitalise = (string) => string.split(' ').map((str) => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' ');
        this.resolvers = {
            user: new SkybotUserFetcher(this),
            member: new SkybotMemberFetcher(this),
            role: new SkybotRoleFetcher(this),
            channel: new SkybotChannelFetcher(this),
            guild: new SkybotGuildFetcher(this)
        };
        this.events = new SkybotEventHandler(this);
        this.commands = new SkybotCommandHandler(this);
        /** @type {Collection<string, Event>} */
        this.aliases = new Collection();
    }

    start() {
        this.commands.init();
        this.events.init();
    }
}