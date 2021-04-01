/** 
 * @interface ICommand
 */
const ICommand = {
    /** @type {String} */
    name: "",
    /** @type {Array<String>} */
    aliases: [],
    /** @type {Array<String>} */
    usages: [],
    /** @type {Array<String>} */
    examples: [],
    /** @type {Array<String>} */
    args: [],
    /** @type {String} */
    description: "",

    /** @type {Object} */
    settings: {},

    /** @type {Boolean} */
    adminOnly: false,
    /** @type {Boolean} */
    ownerOnly: false,
    /** @type {Boolean} */
    devOnly: false,

    /** @type {Object} */
    cooldown: {}
};

/** 
 * @interface IEvent
 */
const IEvent = {
    /** @type {String} */
    name: "",
    /** @type {String} */
    executesOn: "",
    /** @type {Boolean} */
    once: false
};

module.exports = { ICommand, IEvent };