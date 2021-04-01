/** @param {"store" | "news" | "category" | "text" | "voice"} type @param {String} channelName @param {String} channelID */
module.exports = (type, channelName, channelID) => {
    switch (type) {
        case "store":
            return `🛍️ **#${channelName}** (${channelID})`;

        case "news":
            return `📣 **#${channelName}** (${channelID})`;

        case "category":
            return `📁 **${channelName}** (${channelID})`;

        case "text":
            return `💬 **#${channelName}** (${channelID})`;

        case "voice":
            return `🔊 **${channelName}** (${channelID})`;
    }
}