const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
    console.log(`Discord Logged in as: ${client.user.tag}`);
    client.user.setActivity("!help");
});