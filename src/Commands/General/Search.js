const { Message } = require("discord.js");

const BaseCommand = require("../../Lib/Core/BaseCommand");

module.exports = class SearchCommand extends BaseCommand {
    constructor(client) {
        super(client, {
            name: 'search',
            aliases: ['srch'],
            usages: [
                'search user [UserID]',
                'search member [Member]',
                'search emoji [Emoji]',
                'search role [Role]',
                'search channel [Channel]'
            ],
            examples: [
                'search user 114885555732348929',
                'search member @Rowan',
                'search emoji :hug:',
                'search role @',
                'search channel [Channel]'
            ],
            args: [
                '`[UserID]` - This can only be the ID of the user you\'d like to search for',
                '`[Member]` - This can be the ID, the nickname, the username or the mention of the member',
                '`[Emoji]` - This can be the ID, the name or the mention of the emoji',
                '`[Role]` - This can be the ID, the name or the mention of the role',
                '`[Channel]` - This can be the ID, the name or the mention of the channel'
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
        if (!args[0]) {
            const emb = new SkybotEmbed()
            

            return this.client.sem(message,);
        }
    }
}