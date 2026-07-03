
require("dotenv").config();

const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (client) => {
  console.log(`✅ ${client.user.tag} is online!`);
});

client.login(process.env.TOKEN);
