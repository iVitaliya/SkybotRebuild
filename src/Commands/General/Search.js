const { Message } = require("discord.js");

const BaseCommand = require("../../Lib/Core/BaseCommand");
const Channelizer = require("../../Features/Channelizer");
const SkybotEmbed = require("../../Lib/Core/Embed");
const { ColorsString, Icons } = require("../../Lib/Settings");

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

        /** @type {"member" | "emoji" | "role" | "channel"} */
        let searchType;
        
        switch (searchType) {
            case "member":
                const members = this.client.utils.pages(message.guild.members.cache.filter((m) => m.user.username.toLowerCase().includes(args[1])).map((x) => `**${x.user.tag}** (${x.id})`), 8, args[2]);

                if (!members) {
                    return message.channel.send(
                        new SkybotEmbed()
                            .setBase(
                                Icons.Cancel,
                                "An Error Occurred",
                                ColorsString.Failed,
                                "The requested data couldn't be processed nor fetched!")
                    );
                }

                return message.channel.send(new SkybotEmbed()
                    .setBase(Icons.Success,
                        `Member results for "${args[1]}"`,
                        ColorsString.Skybot,
                        members.data.join('\n'))
                    .setFooter(`Requested by @${message.member.displayName} | Page ${args[2]}/${members.max}`));

            case "emoji":
                const emojis = this.client.utils.pages(message.guild.emojis.cache.filter((e) => e.name.toLowerCase().includes(args[1])).map((x) => `<:${x.name}:${x.id}> (${x.id})`), 8, args[2]);

                if (!emojis) {
                    return message.channel.send(
                        new SkybotEmbed()
                            .setBase(
                                Icons.Cancel,
                                "An Error Occurred",
                                ColorsString.Failed,
                                "The requested data couldn't be processed nor fetched!")
                    );
                }

                return message.channel.send(new SkybotEmbed()
                    .setBase(Icons.Success,
                        `Emoji results for "${args[1]}"`,
                        ColorsString.Skybot,
                        emojis.data.join('\n'))
                    .setFooter(`Requested by @${message.member.displayName} | Page ${args[2]}/${emojis.max}`));

            case "role":
                const roles = this.client.utils.pages(message.guild.roles.cache.filter((r) => r.name.toLowerCase().includes(args[1])).map((x) => `**@${x.name}** (${x.id})`), 8, args[2]);

                if (!roles) {
                    return message.channel.send(
                        new SkybotEmbed()
                            .setBase(
                                Icons.Cancel,
                                "An Error Occurred",
                                ColorsString.Failed,
                                "The requested data couldn't be processed nor fetched!")
                    );
                }

                return message.channel.send(new SkybotEmbed()
                    .setBase(Icons.Success,
                        `Role results for "${args[1]}"`,
                        ColorsString.Skybot,
                        roles.data.join('\n'))
                    .setFooter(`Requested by @${message.member.displayName} | Page ${args[2]}/${roles.max}`));

            case "channel":
                const channels = this.client.utils.pages(message.guild.channels.cache.filter((c) => c.name.toLowerCase().includes(args[1])).map((x) => `${Channelizer(x.type, x.name, x.id)}`), 8, args[2]);

                if (!channels) {
                    return message.channel.send(
                        new SkybotEmbed()
                            .setBase(
                                Icons.Cancel,
                                "An Error Occurred",
                                ColorsString.Failed,
                                "The requested data couldn't be processed nor fetched!")
                    );
                }

                return message.channel.send(new SkybotEmbed()
                    .setBase(Icons.Success,
                        `Role results for "${args[1]}"`,
                        ColorsString.Skybot,
                        channels.data.join('\n'))
                    .setFooter(`Requested by @${message.member.displayName} | Page ${args[2]}/${channels.max}`));
        }
    }
}