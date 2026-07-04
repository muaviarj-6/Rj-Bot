require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!")
    .toJSON(),
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        "1393946603001221220",
        "1519649134938816564"
      ),
      { body: commands }
    );

    console.log("✅ Slash commands registered!");
  } catch (error) {
    console.error(error);
  }
})();
