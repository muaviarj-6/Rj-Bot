require("dotenv").config();

const { Client, GatewayIntentBits, Collection, Events } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

client.once(Events.ClientReady, () => {
  console.log(`✅ ${client.user.tag} is online!`);
});

client.login(process.env.TOKEN);
