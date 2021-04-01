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
    }
}