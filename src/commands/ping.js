const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xCE3720)
      .setTitle('🎮 Rust Bot')
      .setDescription(`✅ Bot is online!\n**Ping:** ${interaction.client.ws.ping}ms`)
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
