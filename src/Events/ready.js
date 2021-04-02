const BaseEvent = require("../Lib/Core/BaseEvent");

module.exports = class ReadyEvent extends BaseEvent {
    constructor(client) {
        super(client, {
            name: 'ready',
            executesOn: 'The client',
            once: true
        });
    }

    exec() {
        this.client.log('Info', `${this.client.user.tag} successfully logged into Discord`);
        this.client.user.setPresence({
            status: "dnd",
            activity: {
                name: "the chat",
                type: "LISTENING"
            }
        });

        this.client.log('Debug', `${this.client.users.cache.size} Users | ${this.client.channels.cache.size} Channels | ${this.client.guilds.cache.size} Guilds`);
    }
}