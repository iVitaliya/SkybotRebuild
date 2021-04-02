/** @private */
const Cluster = require("./Client");
/** @private */
const client = new Cluster();

/** @enum {String} @public */
const ColorsString = {
    Skybot: "#002afc",

    Success: "#00f26d",
    Cancel: "#ef3f4c",
    Pushing: "#2bb4eb",
    Blocked: "#a83b35",
    Failed: "#e82b3a",

    LowLatency: "#0f89e3",
    NormalLatency: "#0e6cf9",
    HighLatency: "#0e2af9",

    LowRisk: "#f2d100",
    MediumRisk: "#ff490c",
    HighRisk: "#ff200c",

    ToggleOff: "#e92d3b",
    ToggleOn: "#00d300",

    Settings: "#a6a6a8",
    Guilds: "#42a4ee"
};

/** @enum {Number} @public */
const ColorsInt = {
    Skybot: 0x002afc,

    Success: 0x00f26d,
    Cancel: 0xef3f4c,
    Pushing: 0x2bb4eb,
    Blocked: 0xa83b35,
    Failed: 0xe82b3a,

    LowLatency: 0x0f89e3,
    NormalLatency: 0x0e6cf9,
    HighLatency: 0x0e2af9,

    LowRisk: 0xf2d100,
    MediumRisk: 0xff490c,
    HighRisk: 0xff200c,

    ToggleOff: 0xe92d3b,
    ToggleOn: 0x00d300,

    Settings: 0xa6a6a8,
    Guilds: 0x42a4ee
};

/** @enum {String} @public */
const Icons = {
    Success: "https://i.imgur.com/It9BNU8.png",
    Cancel: "https://i.imgur.com/U3HAPvp.png",
    Pushing: "https://i.imgur.com/tJgejcp.png",
    Blocked: "https://i.imgur.com/vlm4o6f.png",
    Failed: "https://i.imgur.com/HndJ0gv.png",

    LowLatency: "https://i.imgur.com/7Bi1miT.png",
    NormalLatency: "https://i.imgur.com/z4XR5BO.png",
    HighLatency: "https://i.imgur.com/uHZs7oz.png",

    LowRisk: "https://i.imgur.com/lQCdrh4.png",
    MediumRisk: "https://i.imgur.com/kGHdqBL.png",
    HighRisk: "https://i.imgur.com/Hc6OSpu.png",

    ToggleOff: "https://i.imgur.com/jMlPD2R.png",
    ToggleOn: "https://i.imgur.com/FLhQrUS.png",

    Settings: "https://i.imgur.com/BxFXaRr.png",
    Guilds: "https://i.imgur.com/xDR7eBr.png"
}

module.exports = { ColorsString, ColorsInt, Icons }