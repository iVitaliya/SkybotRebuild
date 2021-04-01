const { Message } = require("discord.js");

const BaseCommand = require("../../Lib/Core/BaseCommand");
const Channelizer = require("../../Features/Channelizer");

module.exports = class SearchCommand extends BaseCommand {
    constructor(client) {
        super(client, {
            name: 'search',
            aliases: ['srch'],
            usages: [
                'search member [Member] [Page?]',
                'search emoji [Emoji] [Page?]',
                'search role [Role] [Page?]',
                'search channel [Channel] [Page?]'
            ],
            examples: [
                'search member rowan 1',
                'search emoji hug 1',
                'search role member 1',
                'search channel gen 1'
            ],
            args: [
                '`[Member]` - This can be the username of the member',
                '`[Emoji]` - This can be the name of the emoji',
                '`[Role]` - This can be the name of the role',
                '`[Channel]` - This can be the name of the channel'
            ],
            description: 'Searches for the given item.',

            settings: {
                nsfw: false,
                requiresArgs: true
            },

            adminOnly: false,
            ownerOnly: false,
            devOnly: false,

            cooldown: {
                uses: 3,
                duration: 3
            }
        });
    }

    /** @param {Message} message @param {Array<String>} args */
    async exec(message, args) {
        // if (!args[0]) {
        //     const emb = new SkybotEmbed()
            

        //     return this.client.sem(message,);
        // }

        const members = this.client.utils.results(message.guild.members.cache.filter((m) => m.user.username.toLowerCase().includes(args[1])).map((x) => `**${x.user.tag}** (${x.id})`), 8, args[2]);
        const emojis = this.client.utils.results(message.guild.emojis.cache.filter((e) => e.name.toLowerCase().includes(args[1])).map((x) => `<:${x.name}:${x.id}> ${x.id}`), 8, args[2]);
        const roles = this.client.utils.results(message.guild.roles.cache.filter((r) => r.name.toLowerCase().includes(args[1])).map((x) => `**@${x.name}** (${x.id})`), 8, args[2]);
        const channels = this.client.utils.results(message.guild.channels.cache.filter((c) => c.name.toLowerCase().includes(args[1])).map((x) => `${Channelizer(x.type, x.name, x.id)}`), 8, args[2]);

        /** @type {"member" | "emoji" | "role" | "channel"} */
        const searchType;
        const searchers = {
            member: members,
            emoji: emojis,
            role: roles,
            channel: channels
        };

        switch (searchType) {
            case "member":
                
        }
    }
}