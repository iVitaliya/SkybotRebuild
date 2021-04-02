const { MessageEmbed } = require("discord.js");

const { ColorsInt, ColorsString, Icons } = require("../Settings");

module.exports = class SkybotEmbed extends MessageEmbed {
    constructor() {
        super({
            color: ColorsInt.Skybot
        });
    }

    /**
     * @param {String} icon ⚠ATTENTION⚠
     * This must use the Icon enum!
     * @param {String} title The title of the embed.
     * @param {String | Number} color ⚠ATTENTION⚠
     * This must use the ColorsString enum or the ColorsInt enum!
     * @param {String} description Note that this is optional
     * @example
     * const SkybotEmbed = require("path/to/this/file");
     * 
     * const emb = new SkybotEmbed()
     *      .setBase(<ColorsString>.Failed, "This is an example embed", <Icons>.Cancel);
     * 
     * <Message>.channel.send(emb);
     * @example
     * const SkybotEmbed = require("path/to/this/file");
     * 
     * const emb = new SkybotEmbed()
     *      .setBase(<ColorsString>.Skybot, "This is an example embed", <Icons>.Success, "This is a random description");
     * 
     * <Message>.channel.send(emb);
     * @returns {MessageEmbed}
     */
    setBase(icon, title, color, description = "") {
        this.setColor(color)
            .setAuthor(title, icon)
            .setDescription(description);

        return this;
    }
}