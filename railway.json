const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Show Rust server info'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xCE3720)
      .setTitle('🗺️ Rust Server')
      .setDescription('⚠️ Rust+ connection not configured yet.')
      .addFields(
        { name: '📡 Status', value: 'No connection', inline: true },
        { name: '👥 Players', value: '-', inline: true },
        { name: '⏰ Time', value: '-', inline: true },
      )
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
