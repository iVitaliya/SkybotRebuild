const { GuildMember } = require("discord.js");

const Cluster = require("../Client");

module.exports = class Utilities {
    /** @param {Cluster} client */
    constructor(client) {
        this.client = client;
    }

    /**
     * @param {*} input 
     * @returns {Boolean}
     */
    isClass(input) {
        return typeof input === 'function' &&
            typeof input === 'object' &&
            input.toString().substring(0, 5) === 'class';
    }

    /** 
     * @param {Array<>} arr 
     * @returns {Array<>}
     */
    trimArray(arr, maxLength = 10) {
        if (arr.length > maxLength) {
            const length = arr.length - maxLength;

            arr = arr.slice(0, maxLength);
            arr.push(`${length} more...`);
        }

        return arr;
    }

    /** 
     * @param {Number} bytes 
     * @returns {String}
     */
    formatBytes(bytes) {
        if (bytes === 0) return '0 bytes';

        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));

        return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
    }

    /** 
     * @param {Array<>} arr 
     * @returns {Array<>}
     */
    removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    /** 
     * @param {GuildMember} member 
     * @param {GuildMember} target 
     * @returns {Boolean}
     */
    comparePerms(member, target) {
        return member.roles.highest.position < target.roles.highest.position;
    }

    /** 
     * @param {String} perm 
     * @returns {String}
     */
    formatPerm(perm) {
        return perm
            .toLowerCase()
            .replace(/(^|"|_)(\S)/g, (s) => s.toUpperCase())
            .replace(/_/g, ' ')
            .replace(/Guild/g, 'Server')
            .replace(/Use Vad/g, 'Use Voice Acitvity');
    }

    /**
     * @param {Array<String>} perms
     * @returns {Array<String>}
     */
    formatPerms(perms) {
        /** @type {Array<String>} */
        let res;
        perms.forEach((p) => {
            const prms = p.toLowerCase()
            .replace(/(^|"|_)(\S)/g, (s) => s.toUpperCase())
            .replace(/_/g, ' ')
            .replace(/Guild/g, 'Server')
            .replace(/Use Vad/g, 'Use Voice Acitvity');

            res.push(prms);
        });

        return res;
    }

    /**
     * @param {Array<String>} arr
     * @param {Number} itemsPerPage
     * @param {Number} page
     */
    results(arr, itemsPerPage, page = 1) {
        const maxPages = Math.ceil(arr.length / itemsPerPage);
        if (page < 1 || page > maxPages) return null;
        
        return arr.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }
}